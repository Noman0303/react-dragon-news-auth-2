import React, { useContext } from 'react'
import Navbar from '../shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        // const email = e.target.email.value;
        const form = new FormData(e.currentTarget);
        console.log(e.currentTarget);
        console.log(form);
        // console.log(form);
        // console.log(form.get('email'));
        // console.log(form.get('password'))
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password)

        // create user

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }


    return (
        <div >
            <Navbar></Navbar>
            <div className="flex justify-center  ">
                <div className="card bg-base-100 lg:w-1/2 shadow-2xl p-4 mt-4">
                    <h1 className="text-4xl font-semibold text-center border-b lg:pt-20 pb-12">Register your account</h1>
                    <form className="md:w-3/4 lg:w-1/2 mx-auto " onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label mt-12">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-5">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" required />

                        </div>
                        <p className='items-center text-sm mt-5'>
                            <input type="checkbox" defaultChecked className="checkbox w-4 h-4 mr-2" />
                            Accept <a href='' className='font-semibold'>Term & Conditions</a>
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#403F3F] text-white" >Register</button>
                        </div>
                    </form>
                    <p className="mt-4 text-center">Already have an account! <Link to='/login' className="text-blue-600 font-semibold">Login</Link> </p>
                </div>
            </div>
        </div>

    )
}

export default Register