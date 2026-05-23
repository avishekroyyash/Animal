'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaGoogle, FaRegEyeSlash } from 'react-icons/fa';
import { TbChevronsDownLeft } from 'react-icons/tb';
import { toast } from 'react-toastify';

const LoginPage = () => {
   const [passwordToggle,setpasswordToggle] = useState(false)
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = async(Data) =>{
        // console.log(data)
        const { data, error } = await authClient.signIn.email({
    email: Data.email, // required
    password: Data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
// toast.success('Login is Successfully Complete')
if(!error){
toast.success('Login is Successfully Complete')
}
else {
  toast.error(error.message)
}
// console.log(error,'this is error of login page')
// console.log(error.message,'this is errormess')

    }

        const handleGoogle = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
      toast.success('Google login is Successfully Complete')
      // console.log(data,'this is data and error from resister page')
    };
    
    // console.log(errors,'this is login page form error')

    return (
        <div className='bg-green-800 md:p-10 lg:p-10 container mx-auto'>
           
                <fieldset className="fieldset bg-base-200  rounded-box md:w-md lg:w-xl border-3 border-amber-50 md:p-4 lg:p-4 container mx-auto  ">
                 <h1 className='font-bold text-4xl text-center lg:my-10'>Login your account</h1>
    
                <form onSubmit={handleSubmit(onSubmit)} className='animate__animated animate__pulse relative flex flex-col justify-center mx-auto border-2
                 lg:w-112.5 border-amber-50 space-y-3 p-4 '>
                     <label className="font-bold text-lg">Email</label>
                 <input type="email" className="input w-full bg-gray-200" placeholder="Enter your email" {...register("email",{ required:'Email fill is Required' })} />
                 {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                

                 <label className="font-bold text-lg ">Password</label>
                <input  type={passwordToggle ? 'text' : 'password'} className="input w-full bg-gray-200" placeholder="Enter your password" {...register("password",{ required: 'Password fill is Required'  })} />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                 <span className='absolute top-40 right-10' onClick={()=>setpasswordToggle(!passwordToggle)}>{passwordToggle ? <FaEye/> : <FaRegEyeSlash />}</span>
               

               <button className="btn btn-primary mt-4">Login</button>
              <p className='font-bold mt-5 text-xl'>If you don't have account. <Link className='text-blue-600' href={'/resister'}> Sign up</Link></p>   
                <span className='text-center font-bold text-xl '>or</span>
                <div onClick={handleGoogle} className='btn bg-gray-300 rounded-2xl font-bold'> <FaGoogle />Continu with Google</div>
                </form>
          
               </fieldset>
       
        </div>
    )
};

export default LoginPage;