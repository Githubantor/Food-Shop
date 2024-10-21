import { useContext } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogOut = () => {
        logout()
            .then()
            .catch();
    };

    const navLink = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to='/cart'>Cart</NavLink></li>
            <ul className="bg-rose-500 rounded shadow-lg">
            <li>
                <details className="group">
                    <summary className="cursor-pointer flex items-center text-white">
                        Category
                        <FaCaretDown className="ml-2 duration-300 group-open:rotate-180" />
                    </summary>
                    <ul className="mt-1 rounded">
                        <li><NavLink to='/pizza' className="block text-white hover:bg-rose-600 rounded p-1">Pizza</NavLink></li>
                        <li><NavLink to='/vagetable' className="block text-white hover:bg-rose-600 rounded p-1">Salad</NavLink></li>
                    </ul>
                </details>
            </li>
        </ul>

        </>
    );

    return (
        <div className="navbar bg-rose-500 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-5">
                        {navLink}
                    </ul>
                </div>
                <p className="font-bold text-2xl">Logo</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <button onClick={handleLogOut} className="btn">SignOut</button>
                        :
                        <NavLink to='/login' className="btn flex bg-orange-500 text-white">
                            <FaUser className="mr-2" />
                            My Account
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default NavBar;
