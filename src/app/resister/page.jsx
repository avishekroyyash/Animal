import Link from 'next/link';
import React from 'react';

const ResisterPage = () => {
    return (
       <div className='bg-gray-300 p-10 container mx-auto'>
       
                <fieldset className="fieldset bg-base-200  rounded-box w-xl border-3 border-amber-50  p-4 container mx-auto  ">
                 <h1 className='font-bold text-4xl text-center my-10'>Resister your account</h1>
    
                <form className='relative flex flex-col justify-center mx-auto border-2
                 w-112.5 border-amber-50 space-y-3 p-4 '>
                    
                 <label className="font-bold text-lg">Name</label>
                 <input type="text" className="input w-full bg-gray-200" placeholder="Enter your name"  />
                 

                     <label className="font-bold text-lg">Email</label>
                 <input type="email" className="input w-full bg-gray-200" placeholder="Enter your email"  />
                 

                
              <label className="font-bold text-lg ">Password</label>
              <input type= 'password' className="input w-full bg-gray-200" placeholder="Enter your password"  />
            
               

               <button className="btn btn-primary mt-4">Resister Now</button>
              <p className='font-bold my-5 text-xl'>If you have account . please  <Link className='text-blue-600' href={'/login'}> Login</Link></p>   
                </form>
          
               </fieldset>
          
        </div>
    );
};

export default ResisterPage;