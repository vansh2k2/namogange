import React, { useEffect,  useState } from 'react'
import Globallytable from '../Components/Globallytable'
import Textarea from '../Components/Textarea'




const Page4 = () => {

 


   const columns = [
  { label: "Client Name", accessor: "company.name", width: "w-52" },
  { label: "Contact Details", accessor: "company.email", width: "w-52" },
  { label: "Category", accessor: "contact.person", width: "w-40" },
  { label: "City", accessor: "contact.phone", width: "w-40" },
  { label: "Source", accessor: "category.sub", width: "w-40" },
  { label: "Status", accessor: "Bussiness.type", width: "w-44" },
  { label: "City", accessor: "location.city", width: "w-32" },
  { label: "State", accessor: "location.state", width: "w-32" },
  { label: "Event", accessor: "location.pincode", width: "w-28" },
  { label: "Document No.", accessor: "source.type", width: "w-36" },
  { label: "Updated Details", accessor: "source.addedBy", width: "w-32" },
  // { label: "Last Update Date", accessor: "update.date", width: "w-40" },
  // { label: "Updated By", accessor: "update.by", width: "w-32" },
  ];

  
const rows = [
    {   
      checkbox:true,
      company: { name: "Encodency Pvt. Ltd", email: "labs@tentamus.com" },
      contact: { person: "Ravi Kumar", phone: "+91 9848042002" },
      category: { main: "Organic Products", sub: "Fertiliser" },
      Bussiness: { type: "Manufacturer" },
      location: { city:"Hyderabad", pincode: "500001", state: "Telangana" },
      source: { type: "Local Visit", addedBy: "Admin" },
      update: { date: "17 Sep 2025", by: "Sumit" },
    },
    {
      checkbox:true,
      company: { name: "AgriLabs Pvt. Ltd", email: "info@agrilabs.com" },
      contact: { person: "Neha Sharma", phone: "+91 9876543210" },
      category: { main: "Dairy", sub: "Milk Testing" },
      Bussiness: { type: "Manufacturer" },
      location: { city: "Delhi", pincode: "110001", state: "Delhi" },
      source: { type: "Referral", addedBy: "Ramesh" },
      update: { date: "12 Sep 2025", by: "Anita" },
    },
    // {
    //   checkbox:true,
    //   company: { name: "FreshFarms Ltd", email: "contact@freshfarms.com" },
    //   contact: { person: "Amit Verma", phone: "+91 9123456789" },
    //   category: { main: "Vegetables", sub: "Export Quality" },
    //   Bussiness: { type: "Manufacturer" },
    //   location: { city: "Mumbai", pincode: "400001", state: "Maharashtra" },
    //   source: { type: "Exhibition", addedBy: "Seema" },
    //   update: { date: "05 Sep 2025", by: "Ravi" }, 
    // },
    // {
    //   checkbox:true,
    //   company: { name: "BioCrop Sciences", email: "support@biocrop.com" },
    //   contact: { person: "Priya Mehta", phone: "+91 9812345678" },
    //   category: { main: "Seeds", sub: "Hybrid Seeds" },
    //   Bussiness: { type: "Manufacturer" },
    //   location: { city: "Ahmedabad", pincode: "380001", state: "Gujarat" },
    //   source: { type: "Conference", addedBy: "Karan" },
    //   update: { date: "10 Aug 2025", by: "Deepak" },
    // },
    // {
    //   checkbox:true,
    //   company: { name: "GreenHarvest Pvt Ltd", email: "info@greenharvest.com" },
    //   contact: { person: "Suresh Patel", phone: "+91 9876500000" },
    //   category: { main: "Fruits", sub: "Organic Mangoes" },
    //   Bussiness: { type: "Exporter" },
    //   location: { city: "Pune", pincode: "411001", state: "Maharashtra" },
    //   source: { type: "Trade Fair", addedBy: "Ritika" },
    //   update: { date: "20 Jul 2025", by: "Alok" },
    // },
    // {
    //   checkbox:true,
    //   company: { name: "NutriAgro Foods", email: "contact@nutriagro.com" },
    //   contact: { person: "Vikas Singh", phone: "+91 9999998888" },
    //   category: { main: "Processed Foods", sub: "Snacks" },
    //   Bussiness: { type: "Supplier" },
    //   location: { city: "Lucknow", pincode: "226001", state: "Uttar Pradesh" },
    //   source: { type: "Website", addedBy: "Manish" },
    //   update: { date: "02 Jul 2025", by: "Priya" },
    // },
    // {
    //   checkbox:true,
    //   company: { name: "AgroChem Labs", email: "sales@agrochem.com" },
    //   contact: { person: "Kavita Rao", phone: "+91 9123456000" },
    //   category: { main: "Chemicals", sub: "Pesticides" },
    //   Bussiness: { type: "Distributor" },
    //   location: { city: "Chennai", pincode: "600001", state: "Tamil Nadu" },
    //   source: { type: "Dealer Network", addedBy: "Rohit" },
    //   update: { date: "18 Jun 2025", by: "Sonal" },
    // },
    // {
    //   checkbox:true,
    //   company: { name: "Healthy Harvesters", email: "info@healthyharvest.com" },
    //   contact: { person: "Arjun Kapoor", phone: "+91 9012345678" },
    //   category: { main: "Grains", sub: "Organic Wheat" },
    //   Bussiness: { type: "Wholesaler" },
    //   location: { city: "Jaipur", pincode: "302001", state: "Rajasthan" },
    //   source: { type: "Cold Call", addedBy: "Meena" },
    //   update: { date: "05 May 2025", by: "Raj" },
    // }
  ];

{/*Print to all Tables state */}




  return (
   
      <div className='w-full h-auto bg-[#eef1f5]'>
        {/*Heading*/}
       <div className='w-full h-10 bg-white flex items-center justify-between'> 
         <h1 className='font-normal text-xl text-[#4f5a67] pl-4 '>CLIENT DATA 2023</h1>
       </div>
      
           {/*main DashBoard*/}
                <div className='w-auto bg-white m-6'>
                <div className='flex justify-between pb-1 pr-3 pt-1'>
                 <h1 className='font-normal text-xl text-[#4f5a67] pl-4 pt-1'></h1>
                <div className='flex items-center gap-2 '>
                  <button className='h-6 text-[#fff] border border-[#2e6da4] w-auto  p-2 text-sm bg-[#337ab7] hover:bg-[#235a8a] cursor-pointer flex items-center justify-center'>Add New Lead</button>
                  <button className='h-6 text-[#fff] border border-[#2e6da4] w-25  text-sm bg-[#337ab7] hover:bg-[#235a8a] cursor-pointer flex items-center justify-center'>Warm Client</button>
                  <button className='h-6 text-[#fff] border border-[#2e6da4] w-25  text-sm bg-[#337ab7] hover:bg-[#235a8a] cursor-pointer flex items-center gap-2 justify-center'>Hot Client</button>
                  <button className='h-6 text-[#fff] border border-[#2e6da4] w-auto  p-2 text-sm bg-[#337ab7] hover:bg-[#235a8a] cursor-pointer flex items-center justify-center'>Confirm Client </button>
                  <button className='h-6 text-[#fff] border border-[#2e6da4] w-25  text-sm bg-[#337ab7] hover:bg-[#235a8a] cursor-pointer flex items-center justify-center'>Cold Client</button>
                  <button className='h-6 text-[#fff] border border-[#2e6da4] w-25  text-sm bg-[#337ab7] hover:bg-[#235a8a] cursor-pointer flex items-center gap-2 justify-center'>Raw Data List</button>
                </div>
                </div>
                <hr className=' opacity-10 ml-3 mr-3' />
               

         {/*globally table section */}
         <div  className='pl-5 pr-5 '>
           <Globallytable  rows={rows} colomns={columns}/>  
        </div>


 </div>
         

         {/*comment section */}

      
       <Textarea/>
         
    </div>
  )
}

export default Page4
