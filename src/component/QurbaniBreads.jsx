import React from 'react';

export const metadata = {
  title: 'Animal QurbaniBreads',
  description: 'this is the animal QurbaniBreads ',
}

const QurbaniBreads = () => {
    return (
        <div className='lg:max-w-350 mx-auto'>
              <h1 className='text-center font-bold text-5xl my-10'>Top Qurbani Breeds</h1>
   
        <div className='animate__animated animate__pulse lg:flex justify-center gap-70 border-2 p-15 bg-green-900 text-white rounded-2xl shadow-2xl'>
          
            <div className='space-y-7 '>
                <h1 className='font-bold text-3xl'>Popular Cow Breeds</h1>
            <div className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2'>
                <h1 className='font-bold text-2xl'>1. Deshi Cow</h1>
                <ul className='list-disc pl-5 '>
                    <li>Local Bangladeshi breed</li>
                    <li>Strong immunity and affordable price</li>
                    <li>Popular for natural farming</li>
                </ul>
            </div>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2'>
                <h1 className='font-bold text-2xl'>2. Sahiwal</h1>
                <ul className='list-disc pl-5 '>
                    <li>Origin: Pakistan</li>
                    <li>High-quality meat and strong body</li>
                    <li>Calm and easy to manage</li>
                </ul>
            </div>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2 '>
                <h1 className='font-bold text-2xl'>3. Brahman</h1>
                <ul className='list-disc pl-5 '>
                    <li>Large size and fast growth</li>
                    <li>Heat resistant</li>
                    <li>Popular in commercial farms</li>
                </ul>
            </div>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2 '>
                <h1 className='font-bold text-2xl'>4. Holstein Friesian Cross</h1>
                <ul className='list-disc pl-5 '>
                    <li>Large body weight</li>
                    <li>Attractive appearance</li>
                    <li>High meat production</li>
                </ul>
            </div>
      
          </div>


           <div className='space-y-7 mt-10 lg:mt-0'>
              <h1 className='font-bold text-3xl'>Popular Goat Breeds</h1>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2 '>
                <h1 className='font-bold text-2xl'>1. Black Bengal Goat</h1>
                <ul className='list-disc pl-5 '>
                    <li>Most popular breed in Bangladesh</li>
                    <li>Excellent meat quality</li>
                    <li>Requires less maintenance</li>
                </ul>
            </div>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2 '>
                <h1 className='font-bold text-2xl'>2. Jamunapari</h1>
                <ul className='list-disc pl-5 '>
                    <li>Large-sized goat breed</li>
                    <li>Premium market value</li>
                    <li>Good for large Qurbani setups</li>
                </ul>
            </div>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2 '>
                <h1 className='font-bold text-2xl'>3. Boer Goat</h1>
                <ul className='list-disc pl-5 '>
                    <li>Fast-growing meat breed</li>
                    <li>Muscular body structure</li>
                    <li>High commercial demand</li>
                </ul>
            </div>
            <div  className='bg-white text-black rounded-2xl shadow-2xl p-3 space-y-2 '>
                <h1 className='font-bold text-2xl'>4. Beetal Goat</h1>
                <ul className='list-disc pl-5 '>
                    <li>Strong and healthy breed</li>
                    <li>Good weight gain</li>
                    <li>Attractive appearance</li>
                </ul>
            </div>
        </div>
     </div>
        </div>
    );
};

export default QurbaniBreads;