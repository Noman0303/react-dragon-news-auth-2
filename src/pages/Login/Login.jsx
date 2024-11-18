// import React from 'react'

import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        console.log(e.currentTarget);
        // console.log(form);
        // console.log(form.get('email'));
        // console.log(form.get('password'))
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        signIn(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }


    return (
        <div >
            <Navbar ></Navbar>
            <div className="flex justify-center  ">
                <div className="card bg-base-100 lg:w-1/2 shadow-2xl p-4 mt-4">
                    <h1 className="text-4xl font-semibold text-center ">Login your account</h1>
                    <form className="md:w-3/4 lg:w-1/2 mx-auto " onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" >Login</button>
                        </div>
                    </form>
                    <p className="mt-4 text-center">Dont have an account! <Link to='/register' className="text-blue-600 font-semibold">Register</Link> </p>
                </div>
            </div>
        </div>

    )
}

export default Login