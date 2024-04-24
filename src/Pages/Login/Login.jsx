// import  { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logInImage from '../../assets/images/login/login.svg';
import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
// import axios from 'axios';



const Login = () => {
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    console.log()
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        signIn(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You successfully signed up",
                        icon: "success"
                    })
                }
                navigate(location?.state? location.state: '/');
                // const loggedUser = result.user;
                // const user = {email: loggedUser.email};
                // navigate(location?.state? location.state: '/');
                // axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
                // .then(res =>{
                //     if(res.data.success){
                //         navigate(location?.state? location.state: '/');
                //     }
                // })
                
            })
            .catch(error => console.log(error))

    }
    return (
        <div className="w-full mb-11">
            <div className="flex justify-between items-center">
                <div className="w-2/6">
                    <img src={logInImage} alt="" />
                </div>
                <div className="w-3/6 border rounded p-12">
                    <div>
                        <h3 className='text-center text-4xl font-bold'>Log In</h3>
                    </div>
                    <form className="card-body" onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' value='Login' className="bg-[#FF3811] rounded-md text-white text-xl font-semibold py-3 active:scale-95 transition-transform cursor-pointer" />
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or</p>
                        <button className='flex justify-center items-center border rounded-full px-3 py-1 gap-2 mx-auto mt-5 active:scale-95 transition-transform'>
                            <FcGoogle className='text-lg'></FcGoogle>
                            <p>sign in with google</p>
                        </button>
                        <p className='mt-5'>Don't have an account? <span>
                            <Link to='/signup' className='text-[#FF3811] font-semibold'>SignUp</Link>
                        </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;