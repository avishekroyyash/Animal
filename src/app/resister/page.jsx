'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const ResisterPage = () => {
 const router = useRouter()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
    const onSubmit = async (Data) => {
        // console.log(data);
        const { data, error } = await authClient.signUp.email({
    name: Data.name, // required
    email: Data.email, // required
    password: Data.password, // required
    image: Data.photo,
});
 if(!error){
    router.push('/login')
 }
// console.log(data,error,'this is data and error from resister page')
toast.success('Register is Successfully Complete')
    }

    const handleGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  toast.success('Google register is Successfully Complete')
  // console.log(data,'this is data and error from resister page')
};


    
  
//    console.log(errors,'this is resister page form error')

    return (
       <div className='bg-green-800 md:p-10 lg:p-10 container mx-auto'>
       
                <fieldset className="fieldset bg-base-200  rounded-box md:w-md lg:w-xl border-3 border-amber-50 md:p-4 lg:p-4 container mx-auto  ">
                 <h1 className='font-bold text-4xl text-center lg:my-10'>Resister your account</h1>
    
                <form onSubmit={handleSubmit(onSubmit)} className=' animate__animated animate__pulse relative flex flex-col justify-center mx-auto border-2
             lg:w-112.5 border-amber-50 space-y-3 p-4 '>
                    
                 <label className="font-bold text-lg">Name</label>
                 <input type="text" className="input w-full bg-gray-200" placeholder="Enter your name"  {...register("name", { required:'Name  filled is Required' })} />
                 {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

                     <label className="font-bold text-lg">Email</label>
                 <input type="email" className="input w-full bg-gray-200" placeholder="Enter your email"  {...register("email", { required: 'Email filled is Required' })}  />
                  {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                

                  <label className="font-bold text-lg">Photo Url</label>
                 <input type="text" className="input w-full bg-gray-200" placeholder="Enter your name"  {...register("photo", { required: 'Photo Url filled is required' })} />
                 {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}


              <label className="font-bold text-lg ">Password</label>
              <input type= 'password' className="input w-full bg-gray-200" placeholder="Enter your password"  {...register("password", { required: 'Password fill is required' })}  />
                  {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
               

               <button className="btn btn-primary mt-4">Resister Now</button>
              <p className='font-bold mt-5 text-xl'>If you have account . please  <Link className='text-blue-600' href={'/login'}> Login</Link></p> 

              <span className='text-center font-bold text-xl '>or</span>
             <div onClick={handleGoogle} className='btn bg-gray-300 rounded-2xl font-bold'> <FaGoogle />Continu with Google</div>  
                </form>
          
               </fieldset>
          
        </div>
    );
};

export default ResisterPage;