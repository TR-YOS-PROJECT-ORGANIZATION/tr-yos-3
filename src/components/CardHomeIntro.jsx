import React from 'react'
 import CardHome from './CardHome'
import data from '../helper/data'
 const CardHomeIntro = () => {
  
  return (
   
    <div className='container mx-auto px-4 text-center'>
        <h2 className='text-5xl p-4'>Our Departments</h2>
        <p className='pb-6'>your dream find the university</p>
        <div className="container m-auto grid grid-cols-6 gap-4">
        {data.map( (item, index)=>
           <CardHome item={item} key={index} />
        )}
        </div>
    </div>


    


  )
}
export default CardHomeIntro;