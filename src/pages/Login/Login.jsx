import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { FaRegEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                reset();
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            }).catch(error => setError(error))
    }
    /*     useEffect(() => {
            if (user) {
                navigate(from)
            }
        }, [user]); */
    return (
         <>
            <Helmet>
                <title>Zuko | Login</title>
            </Helmet> 
            {/*          */}
            <div className="hero min-h-screen bg-base-200 my-container">
                <div className="hero-content  mx-auto my-44 grid grid-cols-1 ">
                    <div className='card w-full md:order-1'>

                        <div className="shadow-2xl bg-base-100 md:w-[450px] rounded-3xl">
                        <img className='h-20 rounded-full mx-auto relative bottom-8' src="https://artistryhubproject.web.app/assets/lock-ce5fa0e7.png" alt="" srcset="" />
                        <h1 className='text-center text-2xl text-teal-800 font-semibold'>Login Now</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control font-poppins">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered rounded-full" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control font-poppins relative">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"}  {...register("password", {
                                        required: true,
                                    })} placeholder="password" className="input input-bordered rounded-full" />
                                    <p className=' absolute right-0 mt-14 mr-3 text-lg' onClick={() => setShow(!show)}>
                                        <FaRegEye />
                                    </p>
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    <p className="text-red-600">{error.message}</p>
                                </div>
                                <div className="form-control mt-3 font-poppins">
                                    <input className="btn bg-teal-800 text-white rounded-full" type="submit" value="Login" />
                                </div>
                                <p className='font-poppins'><small className=''>Don't have an account ? <Link to="/signup">Signup</Link></small></p>
                            </form>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;