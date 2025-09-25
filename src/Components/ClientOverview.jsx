import React from 'react';
import Swal from 'sweetalert2';
import { FaTrash, FaUser, FaBuilding } from 'react-icons/fa';
import { IoCallSharp } from "react-icons/io5";

// Sample data to be displayed on the frontend
const communicationHistoryData = [
    {
        id: 1,
        title: (
            <>
                <span className="text-blue-400">FOLLOW-UP CALL FOR ORGANIC EXPO 2026</span>
                <span className="text-red-500"> | ▲ CALL THE CLIENT ON 25 SEP 25 AT 15:45</span>
            </>
        ),
        details: 'Call back required after 7 days, he will visit the office | By: Abhay Raj | On September 20, 2025 at 15:50'
    },
    {
        id: 2,
        title: (
            <>
                <span className="text-blue-400">FOLLOW-UP CALL FOR ORGANIC EXPO 2026</span>
                <span className="text-gray-700"> | ▲ CALL THE CLIENT ON 20 SEP 25 AT 12:15</span>
            </>
        ),
        details: 'Call back required after 7 days, he will visit in office | By: Abhay Raj | On September 19, 2025 at 12:28'
    },
    {
        id: 3,
        title: (
            <>
                <span className="text-blue-400">FOLLOW-UP CALL ON 19 SEP 25 AT 11:25</span>
                <span className="text-gray-700"> | ▲ CALL THE CLIENT ON 19 SEP 25 AT 11:25</span>
            </>
        ),
        details: 'Call not pick will try to connect on whatsapp | By: Abhay Raj | On September 18, 2025 at 15:39'
    },
    {
        id: 4,
        title: (
            <>
                <span className="text-blue-400">WARM CLIENT FOR ORGANIC EXPO 2026</span>
                <span className="text-gray-700"> | ▲ CALL THE CLIENT ON 18 SEP 25 AT 10:15</span>
            </>
        ),
        details: 'Interested layout shared | By: Abhay Raj | On September 17, 2025 at 12:16'
    },
    {
        id: 5,
        title: (
            <>
                <span className="text-blue-400">SENT DETAILS FOR ORGANIC EXPO 2026</span>
                <span className="text-gray-700"> | ▲ CALL THE CLIENT ON 17 SEP 25 AT 10:15</span>
            </>
        ),
        details: 'Details shared | By: Abhay Raj | On September 16, 2025 at 18:15'
    },
    {
        id: 6,
        title: (
            <>
                <span className="text-blue-400">NEW LEAD FOR ORGANIC EXPO 2026</span>
                <span className="text-gray-700"> | ▲ CALL THE CLIENT ON 16 SEP 25 AT 18:00</span>
            </>
        ),
        details: 'New Lead | By: Rishabh Singh | On September 16, 2025 at 18:10'
    },
];

const ClientOverview = ({ client, onBack }) => {
    const communicationHistory = communicationHistoryData;

    if (!client) return null;

    // Function to handle the delete action with SweetAlert2
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // In a real application, you would send a request to your backend to delete the record.
                // For this example, we just show a success message.
                Swal.fire(
                    'Deleted!',
                    `Record with ID ${id} has been deleted.`,
                    'success'
                );
            }
        });
    };

    return (
        <div className="w-full h-auto bg-[#eef1f5]">
            {/* Top Bar */}
            <div className="w-full bg-white shadow-md border-b flex justify-between items-center px-4 py-3">
                <h1 className="text-xl font-semibold text-gray-700">
                    CLIENT OVERVIEW
                </h1>
                <div className="flex gap-2">
                    <button onClick={onBack} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded-sm text-sm font-medium">
                        Back to List
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-sm text-sm font-medium">
                        Add Client
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-sm text-sm font-medium">
                        Master List
                    </button>
                </div>
            </div>

            <div className="flex flex-col m-4 gap-4">
                {/* Client Details Section */}
                <div className="bg-white shadow-md p-4 rounded-md w-full">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-700">
                            {client.company?.name} | Self Employed Details
                        </h2>
                        <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-2 py-1 text-xs rounded-sm">Send Whatsapp</button>
                            <button className="bg-blue-600 text-white px-2 py-1 text-xs rounded-sm">Account</button>
                            <button className="bg-blue-600 text-white px-2 py-1 text-xs rounded-sm">Payments</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-sm text-gray-600 border-b pb-4 mb-4">
                        <div>
                            <p className="font-semibold text-gray-800">Company Details</p>
                            <p>{client.company?.name} | {client.Bussiness?.type} | {client.category?.main}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Data Source</p>
                            <p>{client.source?.type}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Website</p>
                            <p className="text-red-500">Pending</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Address</p>
                            <p>{client.location?.city}, {client.location?.state}, India, {client.location?.pincode}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Email Id</p>
                            <p className="text-blue-600">{client.company?.email}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Landline No.</p>
                            <p className="text-red-500">Pending</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Contact Details</p>
                            <p>{client.contact?.person} | {client.contact?.phone}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Added By</p>
                            <p>{client.update?.date} | {client.update?.by}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Updated By</p>
                            <p>{client.update?.date} | {client.update?.by}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Client Status</p>
                            <p>New Client</p>
                        </div>
                    </div>
                </div>

                {/* Communication Status History Section */}
                <div className="bg-white shadow-md rounded-md w-full">
                    {/* Header with light grey background and building icon */}
                    <h3 className="text-lg font-semibold text-gray-700 py-3 px-4 bg-gray-100 rounded-t-md border-b border-gray-200">
                        <p className="flex items-center gap-2">
                            <FaBuilding className="text-lg text-gray-600" /> Communication Status History
                        </p>
                    </h3>
                    <div className="space-y-0.5 p-2">
                        {communicationHistory.map((entry, index) => (
                            <div key={index} className="flex items-start gap-2 py-1.5 px-2 bg-white rounded-md border border-gray-200 text-sm">
                                <div className="flex-shrink-0 mt-1">
                                    <FaUser className="w-4 h-4 text-gray-500" />
                                </div>
                                <div className="flex-grow flex flex-col">
                                    <p className="font-medium text-xs sm:text-sm">
                                        {entry.title}
                                    </p>
                                    <p className="text-xs text-gray-500 leading-tight">
                                        {entry.details}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(entry.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 mt-1"
                                    aria-label="Delete history entry"
                                >
                                    <FaTrash className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                        {communicationHistory.length === 0 && (
                            <p className="text-center text-gray-500 py-4 text-sm">No communication history found.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientOverview;