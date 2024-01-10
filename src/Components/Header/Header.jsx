import React, { useContext } from 'react';
import logoImg from '../../assets/logo.svg';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShopify } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { UserContext } from '../../Context/Auth_Context';
import Swal from 'sweetalert2';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';
import profilePic from '../../assets/Profile-photo.jpg';

const auth = getAuth(app);

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    // Log Out
    const logOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't Log Out",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out it!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth)
                    .then(() => {
                        Swal.fire({
                            title: "Log Out SuccessFull",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        navigate('/login')
                    })
            }
        });

    }

    return (
        <div>
            <header className="bg-white">
                <nav className="flex container mx-auto items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/">
                            <img className="w-auto h-16 md:h-20" src={logoImg} alt="" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
                        </button>
                    </div>

                    <div className='hidden lg:block'>
                        <div className='lg:flex gap-8 items-center '>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                }
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/service"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                }
                            >
                                Services
                            </NavLink>
                            {/* <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                }
                            >
                                Login
                            </NavLink> */}
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {
                            user ? <div className='flex items-center gap-6'>
                                <Link>
                                    <FaShopify className='w-8 h-8 text-blue-600' />
                                </Link>
                                <details className="dropdown">
                                    <summary className="m-1 flex marker:text-transparent">
                                        <div className="avatar">
                                            <div className="w-10 cursor-pointer rounded-full ring ring-primary">
                                                <img src={user.photoURL ? user.photoURL : profilePic} />
                                            </div>
                                        </div>
                                    </summary>
                                    <ul className="py-2 px-4 mt-2 menu dropdown-content z-10 bg-slate-500 rounded-box w-52 shadow-2xl">
                                        <li className='text-white text-lg font-medium'>Name:   {user.displayName ? user.displayName : 'No Name'}</li>
                                    </ul>
                                </details>

                                <button onClick={logOut} className="btn btn-outline text-center text-orange-600 hover:text-white text-lg font-semibold font-['Inter'] hover:bg-orange-600">Log Out</button>
                            </div> : <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-lg font-bold text-white btn btn-outline text-center hover:text-white hover:bg-orange-600 font-['Inter'] bg-blue-600" : " btn btn-outline text-center text-orange-600 hover:text-white text-lg font-semibold hover:bg-orange-600 font-['Inter']"
                                }
                            >
                                Login
                            </NavLink>
                        }
                    </div>
                </nav>
                {/* Mobile Device */}
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <img className="w-auto h-16 md:h-20" src={logoImg} alt="" />
                            </Link>
                            <button
                                type="button"
                                className="rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-4 py-6 flex flex-col">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                        }
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/about"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                        }
                                    >
                                        About
                                    </NavLink>
                                    <NavLink
                                        to="/service"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                        }
                                    >
                                        Services
                                    </NavLink>
                                    {/* <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-lg font-bold text-blue-600" : "text-neutral-700 text-lg font-['Inter']"
                                        }
                                    >
                                        Login
                                    </NavLink> */}
                                </div>
                                <div className="py-6">
                                    <div className='flex flex-wrap items-center gap-5'>
                                        {
                                            user ? <div className='flex items-center gap-5'>
                                                <Link>
                                                    <FaShopify className='w-8 h-8 text-blue-600' />
                                                </Link>
                                                <details className="dropdown">
                                                    <summary className="m-1 flex marker:text-transparent">
                                                        <div className="avatar">
                                                            <div className="w-10 cursor-pointer rounded-full ring ring-primary">
                                                                <img src={user.photoURL ? user.photoURL : profilePic} />
                                                            </div>
                                                        </div>
                                                    </summary>
                                                    <ul className="py-2 px-4 mt-2 menu dropdown-content z-10 bg-slate-500 rounded-box w-52 shadow-2xl">
                                                        <li className='text-white text-lg font-medium'>Name:   {user.displayName ? user.displayName : 'No Name'}</li>
                                                    </ul>
                                                </details>
                                                <button onClick={logOut} className="btn btn-outline text-center text-orange-600 hover:text-white text-lg font-semibold font-['Inter'] hover:bg-orange-600">Log Out</button>
                                            </div> : <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-lg font-bold text-white btn btn-outline text-center hover:text-white hover:bg-orange-600 font-['Inter'] bg-blue-600" : " btn btn-outline text-center text-orange-600 hover:text-white text-lg font-semibold hover:bg-orange-600 font-['Inter']"
                                                }
                                            >
                                                Login
                                            </NavLink>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
};

export default Header;