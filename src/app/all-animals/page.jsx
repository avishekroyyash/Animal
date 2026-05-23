import Modal from '@/component/Modal';
import Sorting from '@/component/Sorting';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'All Animals',
  description: 'this is all animals data fetch',
}

const AllAnimalPage =async() => {
    const res = await fetch('https://animal-mu-gold.vercel.app/animaldata.json')
    const AnimalData = await res.json();
    return (
           <div className='lg:max-w-350 mx-auto '>
                   <Sorting AnimalData={AnimalData } ></Sorting>
                  
                </div>
    );
};

export default AllAnimalPage;