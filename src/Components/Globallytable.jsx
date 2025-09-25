import React, { useRef, useState } from "react";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useReactToPrint } from "react-to-print";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// Helper function to access nested object properties
const getValue = (obj, path) =>
  path.split(".").reduce((acc, part) => acc && acc[part], obj) || "";

const Globallytable = ({ rows = [], colomns = [], onRowClick }) => {
    const [filters, setFilters] = useState({});
    const [globalSearch, setGlobalSearch] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);
    const tableRef = useRef();
    const tableContainerRef = useRef();
    const printableContentRef = useRef();

    const handleFilterChange = (accessor, value) => {
        setFilters((prev) => ({ ...prev, [accessor]: value.toLowerCase() }));
    };

    const toggleSelectAll = () => {
        if (selectedRows.length === filteredRows.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(filteredRows.map((_, i) => i));
        }
    };

    const toggleRow = (index) => {
        setSelectedRows((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const filteredRows = rows.filter((row) => {
        const matchesFilters = colomns.every((col) => {
            const filterValue = filters[col.accessor] || "";
            const cellValue = String(getValue(row, col.accessor)).toLowerCase();
            if (!cellValue.trim() && filterValue) return false;
            if (!filterValue) return true;
            return cellValue.includes(filterValue);
        });

        const matchesGlobal = globalSearch
            ? colomns.some((col) =>
                String(getValue(row, col.accessor))
                    .toLowerCase()
                    .includes(globalSearch.toLowerCase())
            )
            : true;

        return matchesFilters && matchesGlobal;
    });

    const noData = filteredRows.length === 0;

    // Print functionality using react-to-print, targeting the new ref
    const handlePrint = useReactToPrint({
        content: () => printableContentRef.current,
        documentTitle: "Client Data",
        pageStyle: `@page { size: A4 landscape; margin: 20mm; } @media print { .print-hidden { display: none !important; } }`,
    });

    // Export to Excel functionality
    const exportToExcel = () => {
        const data = filteredRows.map((row) =>
            colomns.reduce((acc, col) => {
                acc[col.label] = getValue(row, col.accessor);
                return acc;
            }, {})
        );
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Clients");
        const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        saveAs(
            new Blob([wbout], { type: "application/octet-stream" }),
            "ClientData.xlsx"
        );
    };

    const scrollTable = (direction) => {
        const container = tableContainerRef.current;
        if (container) {
            const scrollAmount = 300;
            container.scrollBy({
                left: direction === "forward" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <div className="flex flex-wrap justify-between items-center p-5 pt-7 print-hidden">
                <div className="flex items-center mb-4 md:mb-0">
                    <select className="h-8 w-20 border border-gray-300 text-sm pl-4">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">All</option>
                    </select>
                    <p className="ml-1 text-sm mt-1">entries</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <button
                        onClick={handlePrint}
                        className="text-[#2f353b] h-7 w-24 text-xs text-center cursor-pointer hover:bg-black hover:text-white border border-[#2f353b]"
                    >
                        Print
                    </button>
                    <button
                        onClick={exportToExcel}
                        className="h-7 w-24 text-[#78a300] text-xs text-center cursor-pointer hover:bg-[#78a300] hover:text-white border border-[#78a300]"
                    >
                        Excel
                    </button>
                    <div className="flex items-center w-full md:w-50">
                        <label className="pt-1 text-[#2f353b] text-sm" htmlFor="Search">
                            Search:
                        </label>
                        <input
                            value={globalSearch}
                            onChange={(e) => setGlobalSearch(e.target.value)}
                            className="ml-1 px-2 h-7 border border-gray-300 text-xs outline-none hover:border-blue-500 w-full"
                            type="text"
                        />
                    </div>
                </div>
            </div>

            <div
                ref={tableContainerRef}
                className="overflow-x-auto mx-auto"
            >
                {/* A new ref is added here to target only the table for printing */}
                <div ref={printableContentRef}>
                    <table className="border border-gray-200 text-[#4f5a67] text-xs font-semibold mb-5 md:mb-20 w-full min-w-max">
                        <thead>
                            <tr className="bg-[#555555] text-white">
                                <th className="h-8 w-[60px] pl-3 border border-gray-200 print-hidden">
                                    <div className="h-6 flex items-center justify-center !mb-0">
                                        <input
                                            className="table-checkbox"
                                            checked={
                                                selectedRows.length === filteredRows.length &&
                                                filteredRows.length > 0
                                            }
                                            onChange={toggleSelectAll}
                                            type="checkbox"
                                        />
                                    </div>
                                </th>
                                {colomns.map((col) => (
                                    <th
                                        key={col.accessor}
                                        className="h-8 pl-3 border border-gray-200 text-left"
                                        style={{ width: col.width }}
                                    >
                                        {col.label}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {!noData ? (
                                filteredRows.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50">
                                        <td className="h-8 w-[60px] pl-3 border border-gray-200 text-center print-hidden">
                                            <div className="h-5 flex items-center justify-center !mb-0">
                                                <input
                                                    className="table-checkbox"
                                                    checked={selectedRows.includes(i)}
                                                    onChange={() => toggleRow(i)}
                                                    type="checkbox"
                                                    readOnly
                                                />
                                            </div>
                                        </td>
                                        {colomns.map((col) => (
                                            <td
                                                key={col.accessor}
                                                className="h-8 pl-3 border border-gray-200 text-left"
                                                style={{ width: col.width }}
                                            >
                                                {col.accessor === "company.name" ? (
                                                    <span onClick={() => onRowClick(row)} className="text-blue-600 cursor-pointer print-hidden">
                                                        {getValue(row, col.accessor)}
                                                    </span>
                                                ) : (
                                                    getValue(row, col.accessor)
                                                )}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={colomns.length + 1}
                                        className="text-center text-gray-400 py-3 border border-gray-200"
                                    >
                                        No data found
                                    </td>
                                </tr>
                            )}
                        </tbody>

                        <tfoot className="print-hidden">
                            <tr>
                                <td className="w-[60px] border border-gray-200"></td>
                                {colomns.map((col) => (
                                    <td
                                        key={col.accessor}
                                        className="border border-gray-200"
                                        style={{ width: col.width }}
                                    >
                                        <div className="h-8">
                                            <input
                                                type="text"
                                                placeholder={`Search ${col.label}`}
                                                className="w-full px-1 text-xs border-none outline-none"
                                                value={filters[col.accessor] || ""}
                                                onChange={(e) =>
                                                    handleFilterChange(col.accessor, e.target.value)
                                                }
                                            />
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-between items-center p-5 text-xs pt-6 print-hidden">
                <p className="p-2 mb-4 md:mb-0">
                    Showing 1 to {filteredRows.length} of {rows.length} entries
                </p>
                <div className="flex">
                    <ul className="flex cursor-pointer">
                        <li
                            onClick={() => scrollTable("back")}
                            className="border text-gray-400 border-gray-200 flex items-center justify-center h-8 w-12"
                        >
                            <IoIosArrowBack />
                        </li>
                        <li className="border text-white border-gray-200 flex items-center justify-center h-8 w-10 bg-[#337ab7]">
                            1
                        </li>
                        <li
                            onClick={() => scrollTable("forward")}
                            className="border text-gray-400 border-gray-200 flex items-center justify-center h-8 w-12"
                        >
                            <IoIosArrowForward />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Globallytable;