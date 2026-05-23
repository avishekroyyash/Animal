import React from 'react';
export const metadata = {
  title: 'Animal Qurbanitips',
  description: 'this is animal qurbanitips',
}
const QurbaniTips = () => {
    return (
        <div>
          <div className='text-center my-10 space-y-2'>
              <h1 className='text-5xl font-bold text-green-800'>Qurbani Tips</h1>
            <h1 className='text-3xl font-bold text-orange-600'>Essential Tips Before Buying Qurbani Animals</h1>
          </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:max-w-350 mx-auto gap-3 animate__animated animate__pulse'>
            <div className='border space-y-3 bg-orange-700 text-white p-3 rounded-2xl '>
                <h1 className='font-bold text-2xl'>1. Check Animal Health</h1>
               <ul className='list-disc pl-5 '>
               <li>Choose active and healthy animals.</li> 
               <li>Eyes should be bright and clean.</li>
               <li>Avoid animals with injuries, fever, or breathing problems.</li>
               <li>Check if the animal is eating properly.</li>
               </ul>
            </div>
            <div  className='border-1 space-y-3 bg-green-800 text-white p-3 rounded-2xl '>
                <h1  className='font-bold text-2xl'>2. Verify Age Requirements</h1>
                <ul  className='list-disc pl-5 '>
                    <li>Cow/Buffalo: Minimum 2 years old.</li>
                    <li>Goat/Sheep: Minimum 1 year old.</li>
                    <li>Ensure the animal fulfills Islamic Qurbani conditions.</li>
                </ul>
            </div>
            <div  className='border-1 space-y-3 bg-orange-700 text-white p-3 rounded-2xl '>
                <h1  className='font-bold text-2xl'>3. Inspect Body Condition</h1>
                <ul  className='list-disc pl-5 '>
                    <li>Healthy weight and strong body structure are important.</li>
                    <li>Avoid extremely weak or overly thin animals.</li>
                    <li>Check teeth, skin, and legs carefully.</li>
                </ul>
            </div>
            <div  className='border-1 space-y-3 bg-green-700 text-white p-3 rounded-2xl '>
                <h1  className='font-bold text-2xl'>4. Buy From Trusted Sellers</h1>
                <ul  className='list-disc pl-5 '>
                    <li>Purchase from reliable farms or verified sellers.</li>
                    <li>Ask about vaccination and feeding history.</li>
                    <li>Compare prices before making a decision.</li>
                </ul>
            </div>
             <div  className='border-1 space-y-3 bg-orange-600 text-white p-3 rounded-2xl '>
                <h1  className='font-bold text-2xl'>5. Transportation & Care</h1>
                <ul  className='list-disc pl-5 '>
                    <li>Transport animals carefully to avoid stress.</li>
                    <li>Provide enough water and food after purchase.</li>
                    <li>Keep the shelter clean and comfortable.</li>
                </ul>
            </div>
             <div className='border-1 space-y-3 bg-green-700 text-white p-3 rounded-2xl '>
                <h1 className='font-bold text-2xl'>6. Budget Planning</h1>
                <ul className='list-disc pl-5 '>
                    <li>Set a budget before visiting the market.</li>
                    <li>Consider extra costs like transport, food, and care.</li>
                    <li>Avoid emotional overspending.</li>
                </ul>
            </div>
             <div className='border-1 space-y-3 bg-orange-700 text-white p-3 rounded-2xl '>
                <h1 className='font-bold text-2xl'>7. Hygiene & Safety</h1>
                <ul className='list-disc pl-5 '>
                    <li>Maintain cleanliness during handling.</li>
                    <li>Use proper equipment during Qurbani.</li>
                    <li>Follow local health and waste management rules.</li>
         
                </ul>
            </div>
          
        </div>
        </div>
    );
};

export default QurbaniTips;