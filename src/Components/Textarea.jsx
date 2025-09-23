import React from 'react'

const Textarea = () => {
  return (
    <div className='bg-[#fff] mt-5 mb-8  ml-6 mr-6 h-auto w-auto p-5'>
      <label htmlFor="">Message</label>
     
         <textarea className='h-auto w-full border border-gray-300 hover:border-blue-600' name="textstatus" id="" rows="3" placeholder='Update Status....' maxLength="160" required></textarea>
     
    <div className='flex justify-between pt-2'>
         <p className='text-[#e43a45] text-sm'>Maximum character limit 160</p>
         <button1 name="submit" className='w-14 h-8 text-sm pt-1 bg-[#3598dc] border border-[#3598dc] text-[#FFFFFF] text-center'>POST</button1>
    </div>
    </div>
  )
}

export default Textarea
