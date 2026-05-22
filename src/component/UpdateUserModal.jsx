'use client'
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
const UpdateUserModal = () => {


       const dialogRef = useRef(null);
        const router = useRouter();
    
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            address: '',
        });
    
        const openModal = () => {
            dialogRef.current?.showModal();
        };
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // console.log('Form Data:', formData, 'Animal ID:', item);
            dialogRef.current?.close();
            router.push(`/all-animals/${item}`);
        };

    return (
        <div className="relative">
            <button
                className="btn w-full bg-green-800 text-white rounded-2xl p-3 my-2"
                onClick={openModal}
            >
            Open Contact Form
            </button>

            <dialog ref={dialogRef} className="modal">
                <div className="modal-box rounded-2xl">
                    <h3 className="font-bold text-xl mb-4">Your Information</h3>

                    <div className="flex flex-col space-y-3">
                        <label className="font-bold text-lg">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="input w-full bg-gray-200"
                            placeholder="Enter your name"
                        />

                        <label className="font-bold text-lg">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="input w-full bg-gray-200"
                            placeholder="Enter your email"
                        />

                       

                        <button
                            className="btn bg-green-700 text-white rounded-2xl"
                            onClick={handleSubmit}
                        >
                            Save Change
                        </button>
                    </div>

                    <div className="modal-action">
                        <button
                            className="btn"
                            onClick={() => dialogRef.current?.close()}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default UpdateUserModal;