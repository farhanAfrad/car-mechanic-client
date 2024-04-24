import { Link } from 'react-router-dom';
import logInImage from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {signUp} = useContext(AuthContext);
    const handleOnSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email, password);

        signUp(email,password)
        .then(result => {
            if(result.user){
                Swal.fire({
                    title: "Good job!",
                    text: "You successfully signed up",
                    icon: "success"
                  })
            }
        })
        .catch(error => console.log(error))
        
    }
    return (
        <div className="w-full mb-11">
            <div className="flex justify-between items-center gap-28">
                <div className="w-2/6">
                    <img src={logInImage} alt="" />
                </div>
                <div className="w-3/6 border rounded p-12">
                    <div>
                        <h3 className='text-center text-4xl font-bold'>Sign Up</h3>
                    </div>
                    <form className="card-body" onSubmit={handleOnSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-medium">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                        </div>
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
                            <input type='submit' value='Sign Up' className="bg-[#FF3811] rounded-md text-white text-xl font-semibold py-3 active:scale-95 transition-transform cursor-pointer"/>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p>Or</p>
                        <button className='flex justify-center items-center border rounded-full px-3 py-1 gap-2 mx-auto mt-5 active:scale-95 transition-transform'>
                            <FcGoogle className='text-lg'></FcGoogle>
                            <p>sign up google</p>
                        </button>
                        <p className='mt-5'>Already have an account? <span>
                            <Link to='/login' className='text-[#FF3811] font-semibold'>Login</Link>
                            </span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;