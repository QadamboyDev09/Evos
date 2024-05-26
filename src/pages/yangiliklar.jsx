import React from 'react'
import { Link } from 'react-router-dom'

const Yangiliklar = () => {
  return (
 <div className='bg-[#FBF9F9] '>
     <div className='container mx-auto px-14'>
      <h1 className='text-[40px] font-bold py-[30px]'>Yangiliklar</h1>
      <div className='flex gap-10 flex-col lg:flex-row'>
        <div>
        <Link to={'/'}>
        <img className='w-full h-full' src="https://admin.evos.uz/uploads/photo_2024_03_09_14_43_47_df096398c2.jpg" alt="" /></Link>
        </div>
        <Link to={'/imglink'}>
        <div className='w-[200px] bg-white h-[400px] rounded-lg sm:w-[300px]'>
          <div>
            <img className='w-[200px] mx-auto p-[10px] sm:w-[300px] rounded-lg ' src="https://admin.evos.uz/uploads/EVOS_combo_1000x1000_kopiya_4e8c89e144.png" alt="" />
          </div>
          <div>
            <h1 className='p-[10px] text-[13px] text-[#585C7B] sm:text-[15px]'>
             «EVOS»NING BARCHA RESTORANLARIDA YANADA KO'PROQ KOMBO</h1>
          </div>
        </div>
        </Link>
      </div>
    </div>
 </div>
  )
}

export default Yangiliklar