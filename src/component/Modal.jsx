'use client'
import Link from 'next/link';
import React, { useRef } from 'react';

const Modal =({item}) => {
  
     console.log(item,'this is itemid')
    const dialogRef = useRef(null);

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    return (
        <div className="relative">

            <button
                className="btn w-full bg-green-800 text-white rounded-2xl p-3 my-2"
                onClick={openModal}
            >
                Show Details
            </button>

            <dialog
                ref={dialogRef}
                className="modal"
            >
                <div className="modal-box rounded-2xl">
                     <form className=' relative flex flex-col justify-center mx-auto border-2
                 w-112.5 border-amber-50 space-y-3 p-4 '>
                   
                        <label className="font-bold text-lg">Name</label>
                 <input type="text" className="input w-full bg-gray-200" placeholder="Enter your name" />

                     <label className="font-bold text-lg">Email</label>
                 <input type="email" className="input w-full bg-gray-200" placeholder="Enter your email" />
               
                

                 <label className="font-bold text-lg ">Phone</label>
                <input type='phone' className="input w-full bg-gray-200" placeholder="Enter your phone" />

                <label className="font-bold text-lg ">Address</label>
                <textarea placeholder="Enter your Address" className="textarea w-full "></textarea>
                         
                   {/* <Link href={`/all-animals/${item.id}`}><button className='btn'>submit</button></Link> */}
                </form>

          

                    <div className="modal-action">
                        <form method="dialog">
                         
                            <button className="btn">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Modal;