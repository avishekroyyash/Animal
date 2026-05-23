'use client'
import { authClient } from '@/lib/auth-client';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
const UpdateUserModal = () => {


       const dialogRef = useRef(null);
    
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
    
        const handleSubmit = async(e) => {
            e.preventDefault();
            // console.log('Form Data:', formData, 'Animal ID:', item);
            const name = formData.name
           const image = formData.photo
            console.log ({name,image},'this is name and photo from updateprfilemodal')
            await authClient.updateUser({
             name,
             image
                  })
            dialogRef.current?.close();
            toast.success('Succesfully change the data')
          
        };

    return (
        <div className="relative">
            <button
                className="btn w-full bg-green-800 text-white rounded-2xl p-3 my-2"
                onClick={openModal}
            >
            Update Profile
            </button>

            <dialog ref={dialogRef} className="modal">
                <div className="modal-box rounded-2xl">
                    <h3 className="font-bold text-xl mb-4">Update Information</h3>

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
                       
                         <label className="font-bold text-lg">Photo url</label>
                        <input
                            type="text"
                            name="photo"
                            value={formData.photo}
                            onChange={handleChange}
                            className="input w-full bg-gray-200"
                            placeholder="Enter your Photo url"
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