import React, { createElement, useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

const Page1 = () => {

    const Options=[
      "Select Here",
      "Acupressure/Acupuncture","Agriculture Equipments","ANIMAL HUSBANDARY AND DAIRY FIRMING","Ayurveda","Ayurveda Medicine","Ayurveda Products","AYUSH services via Mobile APP",
      "Essential Oil Association Of India","FAFAI Fragrance &amp; Flavour Association of India","Fitness Equipment",
      "Floriculture","Gadgets/Equipments","Govt. &amp; VIPs","Handicraft","HEALTH AND WELLNESS - TOURISM","Herbal Cosmetics","Herbal Medicine","Herbal Products",
      "Homeopathy","Homeopathy Medicine","Horticulture","Hospital","Hospital Equipments","Hospitality","Insurance","Media","Millets","Ministry","Naturopathy","Naturopathy Products",
      "Nutritional Supplements","Organic Fertiliser","Organic Food","Organic Products","Others",
      "Panchkarma Equipments","Pharma","Siddha","Siddha Medicine","Solar","Spices","Sports Equipment","Stevia","Textile","Travel &amp; Tourism","Unani","Unani Medicine/Products","Vegan Food",
      "Wellness Products","Wellness Retreat/Center","Wellness Services","Yoga",
    ];

const Options1=[
  "Select Here","Agency","Aggregator","Association","College","Dealer","Digital Media","Distributor","Electronic Media","Government Body",
  "Institution","Manufacturer","N G O","Print Media","Raw material Supplier","Research Organisation","Retailer","Service Provider","University",
  
];

const countryStateCityData = {

India:{
 UttarPradesh: [
    "Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich",],
  MadhyaPradesh: [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur",],
  Uttarakhand: [
    "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag",],
  Rajasthan: [
    "Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh",],
  AndhraPradesh: [
    "Anakapalli", "Ananthapuramu", "Annamayya", "Bapatla", "Chittoor", "Dr. B.R. Ambedkar Konaseema", "East Godavari", "Eluru", "Guntur", "Kakinada",]
},
USA:{
 California: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose", "Fresno", "Oakland", "Bakersfield", "Anaheim", "Santa Ana"],
  Texas: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo"],
  Florida: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Port St. Lucie", "Tallahassee", "Cape Coral", "Fort Lauderdale"],
  NewYork: ["New York City", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica"],
  Illinois: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Elgin", "Springfield", "Peoria", "Champaign", "Waukegan"]
},
Canada:{
Ontario: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London", "Markham", "Vaughan", "Kitchener", "Windsor"],
  Quebec: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Levis", "Trois-Rivieres", "Terrebonne"],
  BritishColumbia: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Saanich", "Langley", "Delta"],
  Alberta: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Leduc"],
  Manitoba: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Selkirk", "Morden", "Winkler", "Dauphin", "Carman"]
},
 Russia:{
 Moscow: ["Moscow"],
  SaintPetersburg: ["Saint Petersburg"],
  NovosibirskOblast: ["Novosibirsk", "Ob", "Iskitim", "Koltushi", "Berdsk"],
  SverdlovskOblast: ["Yekaterinburg", "Nizhny Tagil", "Kamensk-Uralsky", "Pervouralsk", "Revda"],
  KrasnodarKrai: ["Krasnodar", "Sochi", "Novorossiysk", "Anapa", "Armavir"],
  RepublicOfTatarstan: ["Kazan", "Naberezhnye Chelny", "Almetyevsk", "Zelenodolsk", "Bugulma"],
  ChelyabinskOblast: ["Chelyabinsk", "Magnitogorsk", "Miass", "Snezhinsk", "Zlatoust"],
  SamaraOblast: ["Samara", "Togliatti", "Novokuybyshevsk", "Syzran", "Kuybyshev"],
  RostovOblast: ["Rostov-on-Don", "Taganrog", "Shakhty", "Novocherkassk", "Volgodonsk"],
  BashkortostanRepublic: ["Ufa", "Sterlitamak", "Salavat", "Neftekamsk", "Oktyabrsky"]


},
Japan:{
Tokyo: ["Tokyo", "Hachioji", "Machida", "Tachikawa", "Koganei", "Fuchu", "Chofu", "Akishima", "Hino", "Musashino"],
  Osaka: ["Osaka", "Sakai", "Higashiosaka", "Takatsuki", "Moriguchi", "Yao", "Kadoma", "Matsubara", "Hirakata", "Ibaraki"],
  Hokkaido: ["Sapporo", "Hakodate", "Asahikawa", "Obihiro", "Kushiro", "Otaru", "Wakkanai", "Tomakomai", "Kitami", "Nemuro"],
  Aichi: ["Nagoya", "Toyota", "Okazaki", "Ichinomiya", "Kasugai", "Komaki", "Anjo", "Chiryu", "Tokoname", "Tajimi"],
  Fukuoka: ["Fukuoka", "Kitakyushu", "Kurume", "Omuta", "Iizuka", "Miyama", "Chikugo", "Yanagawa", "Munakata", "Tagawa"]


},
Germany:{
Bavaria: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Würzburg", "Ingolstadt", "Fürth", "Erlangen", "Landshut", "Passau"],
  NorthRhineWestphalia: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Münster"],
  BadenWürttemberg: ["Stuttgart", "Karlsruhe", "Mannheim", "Freiburg", "Heidelberg", "Ulm", "Pforzheim", "Reutlingen", "Tübingen", "Aalen"],
  Hesse: ["Frankfurt am Main", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach", "Hanau", "Marburg", "Gießen", "Fulda", "Rüsselsheim"],
  LowerSaxony: ["Hanover", "Braunschweig", "Osnabrück", "Oldenburg", "Göttingen", "Wolfsburg", "Hildesheim", "Lüneburg", "Delmenhorst", "Celle"]
},
 
};





   {/*selects*/}
    const [come,setcome] = useState("");
    const [come1,setcome1] = useState("");

    {/*countryStateCity States*/}
 const [countryName,setcountryName] = useState("");
 const [stateName,setstateName] = useState("");
 const [cityName,setcityName] = useState("");

   {/*selects*/}
 const [add,setadd] = useState([{id:uuidv4()}]);


 const addnewgrid =()=>{
  setadd([...add,{id:uuidv4()}]);
 };


 const removegrid = (id) => {
  setadd((prev) =>
    prev.length > 1 ? prev.filter((item) => item.id !== id) : prev
  );
};
 
  return (
    <div className='w-full h-auto bg-[#eef1f5]'>
        {/*Heading*/}
       <div className='w-full h-10 bg-white flex items-center justify-between'> 
         <h1 className='font-normal text-xl text-[#4f5a67] pl-4 '>COMPANY DETAILS</h1>
       <div className=' flex items-center pr-4 gap-2'>
      <button1 className='h-6 text-white w-auto  p-2 text-sm bg-[#3598dc] hover:bg-[#217ebd] cursor-pointer flex items-center justify-center'>Uplaod Exhibitor </button1>
      <button1 className='h-6 text-white w-25  text-sm bg-[#3598dc] hover:bg-[#217ebd] cursor-pointer flex items-center justify-center'>Master List</button1>
      <button1 className='h-6 text-white w-25  text-sm bg-[#3598dc] hover:bg-[#217ebd] cursor-pointer flex items-center gap-2 justify-center'>Exhibitor List</button1>
      </div>
       </div>
       {/*main DashBoard*/}
       <div className='w-auto bg-white m-6'>
       <h1 className='font-normal text-xl text-[#4f5a67] pl-4 pt-1'>Add New Company</h1>
       <hr className=' opacity-10 ml-3 mr-3' />
       <div className='row'>
        
        {/* Grid1 : 4 columns in one row */}
        <div className="grid grid-cols-5 gap-4 pt-3 pl-3 pr-3">

          {/* Column 1 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">Company Name <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName1"
              className="h-8 w-full px-2 text-sm "
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <label className='flex' htmlFor="Category">Category <p className='text-red-500 ml-1'>*</p></label>
           <select onChange={(e)=>setcome(e.target.value)} name="Category*" id="" value={come} className='border border-[#9b9898] text-sm px-2 mt-0.5 h-8 w-full opacity-50 '>
            { Options.map((option,index)=>(
              <option key={index} value={option}>
                {option}
                </option>
            ))
            }
           </select>
          </div>

           <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName2">Nature of Bussiness <p className='text-red-500 ml-1'>*</p></label>
            <select onChange={(e)=>setcome1(e.target.value)} name="Nature of Bussiness*" id="" value={come1}  className='border border-[#9d9999] text-sm px-2  h-8 w-full opacity-50 '>
              {Options1.map((option,index)=>(
                <option key={index} value={option} >
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName3">Address <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName3"
              className="  h-8 w-full px-2 text-sm"
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName4">Country <p className='text-red-500 ml-1'>*</p></label>
          <select value={countryName} onChange={(e)=>(
             setcountryName(e.target.value),
             setstateName(""),
             setcityName("")
          )} 
          name="Country*" id=""  className='border border-[#a39f9f] text-sm px-2  h-8 w-full opacity-50 '>
           <option value="">Select Country Here</option>
           {Object.keys(countryStateCityData).map((Country)=>(
            <option value={Country} key={Country}>
              {Country}
            </option>
           ))}
          </select>
          </div>
        </div>
        {/* Grid2 : 6 columns in one row */}
        <div className="grid grid-cols-6 gap-4 pl-3 pr-3 ">

          {/* Column 1 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">State <p className='text-red-500 ml-1'>*</p></label>
            <select onChange={(e)=>(
              setstateName(e.target.value),
              setcityName("")
            )} 
             name="State *" id="" value={stateName} className='border border-[#a09b9b] text-sm px-2 h-8 w-full opacity-50 '>
            <option value="">Select State Here</option>
            {countryName && Object.keys(countryStateCityData[countryName]).map((state)=>(
              <option value={state} key={state}>
              {state}
              </option>
            ))
              }
           </select>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <label className='flex' htmlFor="Category">City <p className='text-red-500 ml-1'>*</p></label>
           <select onChange={(e)=>(
           setcityName(e.target.value)
           )} disabled={!stateName}
           name="City *" id="" value={cityName} className='border border-[#9f9d9d] text-sm px-2 mt-0.5 h-8 w-full opacity-50 '>
           <option value="">Select City Here</option>
            {countryName && stateName && countryStateCityData[countryName][stateName].map((city)=>(
              <option value={city} key={city}>
                {city}
              </option>
            ))}
           </select>
          </div>
 
        {/* Column 3 */}
           <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="Pin Code *">Pin Code <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
          {/* Column 4 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="Website *">Website <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>

          {/* Column 5 */}
         <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="LandLine No.">LandLine No.</label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
         {/* Column 6 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">Email Id <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName1"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
        </div> 

         <div className='grid grid-cols-5 gap-4 pl-3 pr-3'>
          {/* Column 1 */} 
           <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="Pin Code *">Pin Code <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
          {/* Column 2 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="Website *">Website <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>

          {/* Column 3 */}
         <div className="flex flex-col">
            <label className="text-sm mb-1" htmlFor="LandLine No.">LandLine No.</label>
            <input 
              type="text" 
              id="companyName3"
              className="  h-8 w-full px-2 text-sm"
            />
          </div>
         {/* Column 4 */}
          <div className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">Email Id <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName1"
              className="  h-8 w-full px-2 text-sm"
            />
          </div>
         </div>

         {/*new section*/}
         <h1 className='pl-3 font-medium'>Contact Details-1</h1>
        <hr className='opacity-10 ml-3 mr-3' />
          
         {add.map((addItem,index)=>(

          <div key={addItem.id} className='grid grid-cols-7 gap-4 pl-3 pr-3 '>
          {/* Column 1 */} 
           <div  className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="Title *">Title <p className='text-red-500 ml-1'>*</p></label>
           <select name="Title *" id="" className='text-sm border border-[#ccc] px-2 h-8 w-full  '>
            <option value="select Here">Select Here</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="">Mrs.</option>
            <option value="">Dr.</option>
           </select>
          </div>
          {/* Column 2 */}
          <div  className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="Website *">First Name <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>

          {/* Column 3 */}
         <div  className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="LandLine No.">Surname <p className='text-red-500 ml-1'>*</p>.</label>
            <input 
              type="text" 
              id="companyName3"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
         {/* Column 4 */}
          <div  className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">Designation <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName1"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
           {/* Column 5 */}
          <div  className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">Email Address <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName1"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
           {/* Column 6 */}
          <div  className="flex flex-col">
            <label className="text-sm mb-1 flex" htmlFor="companyName1">Mobile No. <p className='text-red-500 ml-1'>*</p></label>
            <input 
              type="text" 
              id="companyName1"
              className=" h-8 w-full px-2 text-sm"
            />
          </div>
           {/* Column 7 */}
          <div  className="flex flex-col">
                
                  <span className="text-sm mb-1 flex font-medium " htmlFor="companyName1">Alternate No.
                  
                   {index===0 ?
                     (<button onClick={addnewgrid} style={{ backgroundColor:'green',marginLeft:'15px', height:'20px',width:'25px',cursor:'pointer'}}>+</button>):
                   ( <button onClick={()=>removegrid(addItem.id)} style={{ backgroundColor:'red',marginLeft:'15px', height:'20px',width:'25px',cursor:'pointer'}}>-</button>)
                   }
                  
                </span>
                  
            <input 
              type="text" 
              id="companyName1"
              className=" h-8 w-full px-2 text-sm"/>
          </div>
       </div>

         ))

         }

       <hr className='opacity-10 ml-3 mr-3'/>

      {/* Other Items*/}

       <div className='flex justify-between pl-3 pr-3 pb-10 pt-5'>
            <p className='text-sm text-green-900 flex gap-1'><p className='text-red-500'>*</p>Required Fields</p>
            
              <div className='flex gap-4 text-sm '>
                  <button  style={{height:'30px',width:'60px',backgroundColor:'#337ab7',borderBlockColor:'#2e6da4',cursor:'pointer', color:'white',display:'flex',alignItems:'center',paddingLeft:'10px'}}>Save<IoIosArrowDroprightCircle /></button>
                  <button style={{height:'30px',width:'60px',backgroundColor:'#d9534f',borderBlockColor:'#d43f3a', cursor:'pointer',color:'white'}}>Reset</button>
              </div>
            
          </div>
           </div>
       </div>
       
       </div>
    
  )
}

export default Page1
