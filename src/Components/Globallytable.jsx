import React, { useRef, useState } from "react";
import { TbCaretUpDownFilled } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import {useReactToPrint} from 'react-to-print'
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";



// helper to access nested values like "company.name"
const getValue = (obj, path) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj) || "";
};

const Globallytable = ({ rows = [], colomns = [] }) => {
  // store filters for each column
  const [filters, setFilters] = useState({});

  // handle input change
  const handleFilterChange = (accessor, value) => {
    setFilters((prev) => ({ ...prev, [accessor]: value.toLowerCase() }));
  };

  // apply filters + hide empty rows
  const filteredRows = rows.filter((row) =>
    colomns.every((col) => {
      const filterValue = filters[col.accessor] || "";
      const cellValue = String(getValue(row, col.accessor)).toLowerCase();

      // 🚫 hide row if cell is empty
      if (!cellValue.trim()) return false;

      // ✅ apply filter logic
      if (!filterValue) return true;
      return cellValue.includes(filterValue);
    })
  );

  const noData = filteredRows.length === 0;

  // functonaility of selectall or individual

const [selectedRows, setSelectedRows] = useState([]);


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

// print pdf functionality


 const tableref= useRef();

const handleprint = useReactToPrint (
  {
     contentRef:tableref, // New API v3 
     documentTitle:"client Data 2023",
     pageStyle: `
      @page { size: A4 portrait||landscape; margin: 20mm; }
      @media print {
        .print-hidden { display: none !important; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #d1d5db; padding: 6px; font-size: 10px; }
      }
    `,
    
  }
);

// Excel sheet functionality
const exportToExcel = () => {
  // prepare data array for Excel
  const data = filteredRows.map(row =>
    colomns.reduce((acc, col) => {
      acc[col.label] = getValue(row, col.accessor);
      return acc;
    }, {})
  );

  // create worksheet
  const ws = XLSX.utils.json_to_sheet(data);

  // create workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Clients");

  // generate Excel file and download
  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  saveAs(new Blob([wbout], { type: "application/octet-stream" }), "ClientData.xlsx");
};






  return (
    <>
     <div className='flex justify-between pt-7 pl-5 pr-5'>
                    <div className='flex'>
                      <select className='h-8 w-20 border border-gray-300 items-center pl-4 text-sm ' name="entries" id="">
                     <option value="">10</option>
                     <option value="">20</option>
                     <option value="">30</option>
                     <option value="">50</option>
                     <option value="">100</option>
                     <option value="">All</option>
                     </select>
                     <p className='ml-1 text-sm mt-1'>entries</p>
                    </div>
                    <div className=' flex justify-center  gap-2  '>
                     <button onClick={handleprint} className='text-[#2f353b] h-7 w-24 text-xs text-center  cursor-pointer hover:bg-black hover:text-[#fff] border border-[#2f353b]'>Print</button>
                     <button onClick={exportToExcel} className=' h-7 w-24 text-[#78a300] text-xs text-center cursor-pointer hover:bg-[#78a300] hover:text-[#fff] border border-[#78a300]'>Excel</button>
                    <div className='flex w-50'>
                      <label className='pt-1 text-[#2f353b]' htmlFor="Search">Search:</label>
                     <input  value={filters[col.accessor] || ""}
                  onChange={(e) => handleFilterChange(col.accessor, e.target.value)} className='hover:bg-blue-500 cursor-pointer' type="text" name="" id="" />
                    </div>
                    </div> 
                    </div>

                     
   
    <div  className="overflow-x-auto max-w-[1030px] overflow-hidden">
      <table ref={tableref} className="border border-gray-200 text-[#4f5a67] text-xs font-semibold mb-20 w-full ">
        
        {/* HEADER */}
        <thead className="min-w-max w-full">
          <tr className="flex bg-[#555555]">
            {/* Checkbox column */}
            <th className="flex items-center justify-between h-7 w-[60px] pl-3 border border-gray-200 text-white">
              <div className="h-5 w-5 mb-3 print-hidden"><input checked={selectedRows.length === filteredRows.length && filteredRows.length > 0}
        onChange={toggleSelectAll}
         type="checkbox" /></div>
              <TbCaretUpDownFilled />
            </th>
            {colomns.map((col) => (
              <th
                key={col.accessor}
                className="flex items-center justify-between h-7 pl-3 border border-gray-200 text-white"
                style={{ width: "150px" }}
              >
                {col.label}
                <TbCaretUpDownFilled />
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {!noData ? (
            filteredRows.map((row, i) => (
              <tr key={i} className="flex">
                {/* Checkbox cell */}
                <td className="flex items-center justify-between h-7 w-[60px] pl-3 border border-gray-200">
                  <div className="h-5 w-5 mb-3 print-hidden"><input  checked={selectedRows.includes(i)}
          onChange={() => toggleRow(i)} type="checkbox" readOnly /></div>
                </td>
                {/* Row data */}
                {colomns.map((col) => (
                  <td
                    key={col.accessor}
                    className="flex items-center justify-between h-7 pl-3 border border-gray-200"
                    style={{ width: "150px" }}
                  >
                    {getValue(row, col.accessor)}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="flex">
              <td
                colSpan={colomns.length + 1}
                className="text-center text-gray-400 py-3 w-full border border-gray-200"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>

        {/* FOOTER FILTERS */}
        <tfoot className="print-hidden">
          <tr className="flex">
            {/* Empty cell for checkbox column */}
            <td className="w-[60px] border border-gray-200"></td>
            {colomns.map((col) => (
              <td
                key={col.accessor}
                className="border border-gray-200"
                style={{ width: "150px" }}
              >
                
                <div className="h-8 ">
                  <input
                  type="text"
                  placeholder={`Search ${col.label}`}
                  className="w-full px-1 text-xs border-none outline-none"
                  value={filters[col.accessor] || ""}
                  onChange={(e) => handleFilterChange(col.accessor, e.target.value)}
                />
                </div>
              </td>
            ))}
          </tr>
        </tfoot>
       
      </table>
    
    </div>
       {/*bottom bar */}
                    
                             
                              <div className='w-full h-20 flex justify-between  pl-5 pr-5 text-xs pt-6'>
                              <p className='p-2'>Showing 1 to 8 of 8 entries</p>
                              <div>
                                <ul className='flex '>
                                  <li className='border text-gray-400 border-gray-200 flex items-center justify-center h-8 w-12'><IoIosArrowBack /></li>
                                  <li className='border text-[#fff] border-gray-200 flex items-center justify-center h-8 w-10 bg-[#337ab7]'>1</li>
                                  <li className='border text-gray-400 border-gray-200 flex items-center justify-center h-8 w-12'><IoIosArrowForward /></li>
                                </ul>
                              </div>
                             </div>
    </>
  );
};

export default Globallytable;
