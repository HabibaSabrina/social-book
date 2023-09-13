import React from 'react';

const Login = () => {
    return (
        <div className='bg-slate-300 py-10'>
            <form className='text-center border-4 border-blue-900 bg-slate-100 w-1/2 mx-auto rounded-xl my-20 p-20' action="">
                <h1 className='text-3xl font-semibold text-blue-900'>Login</h1>
            <input className='border-2 w-96 p-3 border-blue-900 my-5 rounded-xl' placeholder='Your Email' type="email" />
            <br />
            <input className='border-2 w-96 p-3 border-blue-900 my-5 rounded-xl' placeholder='Password' type="password" />
            <br />
            <button className='p-5 bg-blue-900 text-white font-semibold rounded-xl'>Submit</button>
            </form>
        </div>
    );
};

export default Login;