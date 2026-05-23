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
        <div>
         
        <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex="0" role="button" class="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>  <Link className={`font-bold text-xl ${pathname=='/' && 'bg-green-800 text-white p-3 rounded-xl'}`} href={'/'}>Home</Link> </li>
        <li>
         <Link className={`font-bold text-xl ${pathname=='/all-animals' && 'bg-green-800 text-white p-3 rounded-xl'}`}  href={'/all-animals'}>All Animal</Link> 
        </li>
        <li> <Link  className={`font-bold text-xl ${pathname=='/profile' && 'bg-green-800 text-white p-3 rounded-xl'}`}  href={'/profile'}>Profile</Link>  </li>
      </ul>
    </div>
     <Image className='bg-green-600 rounded-full p-1' src={logo} alt='cow' width={50} height={50}></Image>
  </div>
  <div class="navbar-center hidden md:flex lg:flex">
    <ul class="menu menu-horizontal px-1 lg:gap-3 ">
      <li>  <Link className={`font-bold lg:text-xl ${pathname=='/' && 'bg-green-800 text-white lg:p-3 rounded-xl'}`} href={'/'}>Home</Link> </li>
      <li>
        <Link className={`font-bold lg:text-xl ${pathname=='/all-animals' && 'bg-green-800 text-white lg:p-3 rounded-xl'}`}  href={'/all-animals'}>All Animal</Link> 
      </li>
      <li> <Link  className={`font-bold lg:text-xl ${pathname=='/profile' && 'bg-green-800 text-white lg:p-3 rounded-xl'}`}  href={'/profile'}>Profile</Link>  </li>
    </ul>
  </div>
  <div class="navbar-end">
    <div className='flex gap-4 items-center'>
             
             {
                existUser ? ( <>
                    <div className="avatar avatar-online">
                 <div className=" ">
             <Image className='rounded-full' src={existUser?.image} alt={existUser?.name[0]} width={50} height={50} referrerPolicy='no-referrer' />
                </div>
                  </div>
                  <div>
                    <button onClick={()=>signOut()} className='btn bg-green-800 lg:p-5 rounded-2xl text-white font-bold lg:text-xl lg:py-6'>Logout</button>
                  </div> 
                  </>
                ):(
                    <>
                    <Link href={'/login'}>  <button className='btn bg-green-800 rounded-xl lg:p-5 lg:py-6 text-white hover:bg-green-700 text-xl font-bold'>Login</button></Link>
                <Link href={'/resister'}> <button className='btn bg-green-800 rounded-xl lg:p-5 lg:py-6 text-white hover:bg-green-700 text-xl font-bold'>Resister</button></Link>
                    </>
                )

             }
          </div>
  </div>
</div>



        {/* <div className='lg:flex justify-between items-center lg:w-400 mx-auto my-5 border-b-2 border-gray-300 shadow-2xl px-3 py-2'>
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
                 <div className="w-24 ">
             <Image className='rounded-full' src={existUser?.image} alt={existUser?.name[0]} width={100} height={100} referrerPolicy='no-referrer' />
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
          </div>
        </div>
         */}


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
    );
};

export default Navber;