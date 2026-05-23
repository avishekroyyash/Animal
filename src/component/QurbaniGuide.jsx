import Image from 'next/image';
import React from 'react';
import cowimg from '@/Asset/cow-qurbany.jpg'

export const metadata = {
  title: 'Animal QurbaniGuide',
  description: 'this is animal qurbaniguide',
}

const QurbaniGuide = () => {
    return (
        <div className='max-w-[1400px] mx-auto my-10'>
        <div className='flex border-2 items-center gap-50 p-10 rounded-2xl bg-green-950'>
            <div>
            <Image className='rounded-2xl' src={cowimg} alt='cow' width={700} height={300} >

            </Image>
            </div>
            <div className='space-y-5 text-white '>
            <h1 className='text-3xl font-bold '>Qurbani Preparation Checklist</h1>
              <p>
                ✔ Arrange clean shelter <br />
                ✔ Store enough food & water <br />
                ✔ Prepare ropes and transport <br />
                ✔ Contact experienced butcher <br />
                ✔ Maintain hygiene supplies <br />
                ✔ Plan meat distribution properly
              </p>
            </div>
        </div>
        </div>
    );
};

export default QurbaniGuide;