import Image from 'next/image';
import React from 'react';

export async function generateMetadata({ params }) {
   const {id} = await params ;
//   console.log(id,'this is generatemetadata')
  const res = await fetch('https://animal-mu-gold.vercel.app/animaldata.json');
    const AllAnimalData = await res.json();
   //  console.log(AllAnimalData,'this is all animal data')
  const FindAnimal = AllAnimalData.find(p => p.id == id);
//   console.log(FindAnimal,'this is findanimal')
  return {
    title: FindAnimal.name,
    description: FindAnimal.description,
  }
}

const AnimalDetailsPage =async ({params}) => {
    const {id} = await params ;
    const res = await fetch('https://animal-mu-gold.vercel.app/animaldata.json');
    const AllAnimalData = await res.json();
   //  console.log(AllAnimalData,'this is allanimal data')
   //  console.log(id,'this is param')
    const FindAnimal = AllAnimalData.find(p => p.id == id);
   //  console.log(FindAnimal,'this is findanimal data')
    return (
        <div className='mx-auto'>
          <div className='grid grid-cols-6 grid-rows-3 gap-5'>
            <div className='col-span-3 row-span-3 '>
            <Image className='rounded-2xl' src={FindAnimal.image} alt={FindAnimal.name} width={700} height={300} ></Image>
            </div>
            <div className='col-span-1 bg-white border-2  flex justify-center items-center p-1 rounded-2xl border-gray-200 shadow-2xl'>
             <h1 className='font-bold '> Type: {FindAnimal.type}</h1>
            </div>
             <div className='col-span-1 bg-white border-2  flex justify-center items-center rounded-2xl border-gray-200 shadow-2xl'>
               <h1 className=' font-bold p-1 '>Breed: {FindAnimal.breed}</h1>
             </div>
            <div className='col-span-1  bg-white border-2  flex justify-center items-center rounded-2xl border-gray-200 shadow-2xl'>
               <h1 className='font-bold p-1 '> catagory: {FindAnimal.category}</h1>
            </div>
         
             <div className='col-span-1  bg-white border-2  flex justify-center items-center rounded-2xl border-gray-200 shadow-2xl'>
                <h1 className=' font-bold p-1 '>Weight: {FindAnimal.weight} kg</h1>
             </div>
             <div className='col-span-1  bg-white border-2  flex justify-center items-center rounded-2xl border-gray-200 shadow-2xl'>
                <h1 className=' font-bold p-1 '>Age: {FindAnimal.age} year</h1>
             </div>
            <div className='col-span-1  bg-white border-2  flex justify-center items-center rounded-2xl border-gray-200 shadow-2xl'>
                <h1 className=' font-bold p-1 '>Location: {FindAnimal.location}</h1>
            </div>
               <div className='col-span-3 row-span-1 bg-amber-200 text-center space-y-3 rounded-2xl max-h-[150px]'>
                <h1 className='font-bold text-3xl mt-3'>{FindAnimal.name}</h1>
                <p className='font-semibold text-2xl'>{FindAnimal.description}</p>
                <button className='btn p-3 rounded-2xl font-bold '>Price : {FindAnimal.price}</button>
            </div>
           </div>
        </div>
    );
};

export default AnimalDetailsPage;