import React from 'react';
import bannerimg from '@/Asset/banner-cow.jpg'
import Image from 'next/image';
import Link from 'next/link';
const Banner = () => {
    return (
        <div className='relative bg-gray-300  max-w-[1400] mx-auto '>
            <Image className='rounded-2xl shadow-2xl mx-auto max-h-[600px]' src={bannerimg} alt='cow' width={1400} height={600} > 
            </Image>
            <h1 className='font-bold text-6xl absolute top-52 left-15 text-white'>Livestock Booking <br />Platform</h1>
            <div className='flex items-center gap-4 absolute top-90 left-15 mx-auto'> 
              <Link href={'/resister'}>  <button className='btn bg-green-800 text-white font-bold text-2xl px-5 py-7 rounded-xl'>Register Now</button></Link>
              <Link href={'/all-animals'}>  <button className='btn bg-green-800 text-white font-bold text-2xl px-5 py-7 rounded-xl'> All Animals</button></Link>
            </div>
        </div>
    );
};

export default Banner;