import React from 'react';
import bannerimg from '@/Asset/banner-cow.jpg'
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Animal Banner',
  description: 'this is Animal banner',
}

const Banner = () => {
    return (
        <div className='relative  lg:max-w-[1400] mx-auto '>
            <Image className=' animate__animated animate__pulse rounded-2xl shadow-2xl mx-auto max-h-150' src={bannerimg} alt='cow' width={1400} height={600} > 
            </Image>
            <h1 className='animate__animated animate__pulse font-bold top-30 left-1 text-2xl md:top-45 md:left-3 md:text-4xl lg:text-6xl absolute lg:top-52 lg:left-15 text-white'>Livestock Booking <br />Platform</h1>
            <div className='flex items-center gap-2 top-50  left-1 md:top-70  lg:gap-4 md:gap-3 absolute lg:top-90 lg:left-15 mx-auto'> 
              <Link href={'/resister'}>  <button className='btn  bg-green-800 text-white font-bold lg:text-2xl lg:px-5 lg:py-7 rounded-xl'>Register Now</button></Link>
              <Link href={'/all-animals'}>  <button className='btn md:bg-green-800  bg-transparent lg:bg-green-800 text-white font-bold lg:text-2xl lg:px-5 lg:py-7 rounded-xl'> All Animals</button></Link>
            </div>
        </div>
    );
};

export default Banner;