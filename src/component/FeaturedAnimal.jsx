import Image from 'next/image';
import React from 'react';

export const metadata = {
  title: 'Animal Data',
  description: 'This is Animal Data',
}

const FeaturedAnimal = async() => {
    const res = await fetch('https://animal-mu-gold.vercel.app/animaldata.json')
    const CowData = await res.json();
   
    return (
        <div className=' lg:max-w-[1400] mx-auto'>
            <h1 className='font-bold text-5xl my-10 '>Featured animals</h1>
            <div className='grid md:grid-cols-2  lg:grid-cols-3 gap-3 '>
                {
                    CowData.slice(0,5).map((item,index) => <div key={index} className=' p-3 border-2 border-gray-300 rounded-2xl shadow-2xl '>
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
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedAnimal;