'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from './Modal';

const Sorting = ({AnimalData }) => {
    const [sortedData,setsortedData] = useState(AnimalData)
    //   console.log(AnimalData,'this is from sort in animaldata')
  

 const Assending =()=>{
 const AssendingSort = [...sortedData].sort((a,b)=> a.price - b.price);
 //console.log(AssendingSort,'this is from assendingSorting')
 setsortedData(AssendingSort)

 }
 
 const Dessending =()=>{
      const DesendingSort = [...sortedData].sort((a,b)=>b.price-a.price);
    //    console.log(DesendingSort,'this is from desendingSorting')
    setsortedData(DesendingSort)
    
 }
//   const DesendingSort = AnimalData.sort((a,b)=>b.price-a.price)
 
  

    return (
        <div>
 <div className='md:flex lg:flex justify-between items-center px-7 mb-15 '>
                      <h1 className='font-bold text-5xl my-10 '>All Animals</h1>
 {/* this is sorting */}
 <div class="dropdown dropdown-start">
  <div tabIndex="0" role="button" class="btn m-1 font-bold">Sort By Price ⬇️</div>
  <ul tabIndex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={Assending} className='btn ' >low to high</li>
    <li onClick={Dessending} className='btn'>high to low</li>
  </ul>
</div>
  </div>


<div className='grid md:grid-cols-2 md:mb-10 lg:grid-cols-3 gap-3 md:gap-5 animate__animated animate__bounceIn '>
                        {
                          sortedData.map((item,index) => <div key={index} className=' p-3 border-2 border-gray-300 rounded-2xl shadow-2xl '>
                                <div className=' relative w-full aspect-square'>
                                   <Image className='rounded-2xl object-cover mb-3' src={item.image} alt='animal' fill={true}  ></Image>
                                </div>
                            <div className='space-y-2 mt-4'>
                                
                             <h1 className='font-bold text-2xl'>{item.name}</h1>
        
        
                              <h2 className={`font-medium text-xl ${item.type=='Cow'?'text-white btn rounded-2xl bg-green-500' : item.type =='Goat'? 'text-white btn rounded-2xl bg-yellow-500' : item.type=='Hen' ? 'text-white btn rounded-2xl bg-red-500' : item.type == 'Camel' ? 'text-white btn rounded-2xl bg-indigo-700':'text-white btn rounded-2xl bg-orange-800' }`}>{item.type}</h2>
        
        
                             <h2 className='font-semibold '>{item.category}</h2>
                             <div className='flex justify-between items-center'>
                                 <h2 className='font-bold text-2xl'>{item.breed}</h2>
                             <button className='btn bg-green-800 text-2xl text-white rounded-2xl'><h2>{item.price}</h2></button>
                             </div>
                             {/* <Link href={`/all-animals/${item.id}`}><button className='btn w-full bg-green-700 text-white font-bold rounded-2xl my-2'>View Details</button></Link> */}
                              
                              
                           <Modal item={item.id}></Modal>

                            </div>
                            </div>)
                        }
                    </div>




        </div>
    );
};

export default Sorting;