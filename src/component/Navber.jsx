'use client'
import Link from 'next/link';
import React from 'react';
import logo from '@/Asset/cow-logo.jpg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from '@/lib/auth-client';
const Navber = () => {
    const pathname = usePathname();
    
    const {data,isPending} = useSession();
    // console.log(data,'this is user')
    const existUser = data?.user;
    // console.log(existUser,'thsi is exist user')
    
    
    // console.log(pathname,'this is path name')
    return (
        <div className='flex justify-between items-center w-400 mx-auto my-5 border-b-2 border-gray-300 shadow-2xl px-3 py-2'>
            <div>
             <Image className='bg-green-600 rounded-full p-1' src={logo} alt='cow' width={100} height={100}></Image>
            </div>
             <div className='flex justify-center items-center gap-5 '>
             <Link className={`font-bold text-xl ${pathname=='/' && 'bg-green-800 text-white p-3 rounded-xl'}`} href={'/'}>Home</Link> 
             <Link className={`font-bold text-xl ${pathname=='/all-animals' && 'bg-green-800 text-white p-3 rounded-xl'}`}  href={'/all-animals'}>All Animal</Link> 
             <Link  className={`font-bold text-xl ${pathname=='/profile' && 'bg-green-800 text-white p-3 rounded-xl'}`}  href={'/profile'}>Profile</Link>  
             </div>
             <div className='flex gap-4 items-center'>
             
             {
                existUser ? ( <>
                    <div className="avatar avatar-online">
                 <div className="w-24 rounded-full">
             <Image className='rounded-full' src={existUser?.image} alt={existUser?.name[0]} fill={true} referrerPolicy='no-referrer' />
                </div>
                  </div>
                  <div>
                    <button onClick={()=>signOut()} className='btn bg-green-800 p-5 rounded-2xl text-white font-bold text-xl py-6'>Logout</button>
                  </div> 
                  </>
                ):(
                    <>
                    <Link href={'/login'}>  <button className='btn bg-green-800 rounded-xl p-5 py-6 text-white hover:bg-green-700 text-xl font-bold'>Login</button></Link>
                <Link href={'/resister'}> <button className='btn bg-green-800 rounded-xl p-5 py-6 text-white hover:bg-green-700 text-xl font-bold'>Resister</button></Link>
                    </>
                )

             }
        


              {/* <div className="avatar avatar-online">
                 <div className="w-24 rounded-full">
             <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
                  </div>
                  <div>
                    <button onClick={()=>signOut()} className='btn bg-green-800 p-5 rounded-2xl text-white font-bold text-xl py-6'>Logout</button>
                  </div> */}

               {/* <Link href={'/login'}>  <button className='btn bg-green-800 rounded-xl p-5 py-6 text-white hover:bg-green-700 text-xl font-bold'>Login</button></Link>
                <Link href={'/resister'}> <button className='btn bg-green-800 rounded-xl p-5 py-6 text-white hover:bg-green-700 text-xl font-bold'>Resister</button></Link> */}
             </div>
        </div>
    );
};

export default Navber;