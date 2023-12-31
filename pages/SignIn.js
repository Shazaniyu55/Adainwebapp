import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


function SignIn(){
    return(
        <div className='flex justify-center items-center'>

<div className='flex justify-center items-center mt-10'>

<div className="w-full max-w-xl">

<form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">

<div className="mb-6">
<label className="block text-gray-700 text-sm font-bold mb-2" for="password">
Email
</label>
<input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="email" placeholder="Email"/>

</div>

<div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

      <div className="flex justify-end">
      <p className="text-red-500 text-xs italic">Don`t have an account? <Link href='/SignUp' className='text-adainyellow'>sign up</Link></p>
      </div>
    </div>

<div className="flex items-center justify-center">
<button className="mx-8 bg-adainyellow text-white px-4 py-2 rounded" type="button">
Login In
</button>

</div>
</form>

</div>
    
    

</div>
            
        </div>
    )

}

export default SignIn