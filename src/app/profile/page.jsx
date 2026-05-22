'use client'

import UpdateUserModal from '@/component/UpdateUserModal';
import { useSession } from '@/lib/auth-client';

import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
        const {data,isPending} = useSession();
        // console.log(data,'this is user')
         const existUser = data?.user;
        //  console.log(existUser,'thsi is exist user')
    return (
        <div>
            <div className='flex border-2 justify-center flex-col items-center p-5 mx-auto border-gray-300 shadow-2xl '>
          <div className="avatar avatar-online ">
                        <div className="w-24">
                    <Image className='rounded-full' src={existUser?.image} alt={existUser?.name[0]} width={100} height={100} referrerPolicy='no-referrer' />
                       </div>
                         </div>
                         <div>
                          <h1 className='font-bold text-2xl'>{existUser?.name}</h1>
                           <h1>{existUser?.email}</h1>
                           <UpdateUserModal></UpdateUserModal>
                         </div> 
              </div>
        </div>
    );
};

export default ProfilePage;