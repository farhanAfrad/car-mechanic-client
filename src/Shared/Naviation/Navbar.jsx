import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import "./navstyle.css"
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.log(error));

    }
    const link = <div className='flex gap-2 text-lg font-semibold'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        {
            user?.email ? <div>
                <NavLink to='/mybookings' className='mr-2'>My Bookings</NavLink>
                <Link onClick={handleLogOut}>Log out</Link>
            </div> : <NavLink to='/login'>Login</NavLink>
        }


    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;