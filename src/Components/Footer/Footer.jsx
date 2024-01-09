import React from 'react';
import logoImg from '../../assets/Footer-logo.png';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer md:grid-cols-2 lg:grid-cols-4 md:gap-20 p-10 bg-neutral-900  text-neutral-content">
                <nav>
                    <img src={logoImg} className="w-auto h-16 md:h-20" />
                    <p className="link link-hover">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className='flex gap-3 pt-3'>
                        <Link className='bg-opacity-50 bg-white rounded-full'>
                            <FaGoogle className="text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-2" />
                        </Link>
                        <Link className='bg-opacity-50 bg-white rounded-full'>
                            <FaTwitter className="text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-2" />
                        </Link>
                        <Link className='bg-opacity-50 bg-white rounded-full'>
                            <FaInstagram className="text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-2" />
                        </Link>
                        <Link className='bg-opacity-50 bg-white rounded-full'>
                            <FaLinkedin className="text-center text-white text-sm font-normal font-['Font Awesome 5 Brands'] w-[36.36px] h-[34.62px] p-2" />
                        </Link>
                    </div>
                </nav>
                <nav>
                    <header className="text-white text-xl font-semibold font-['Inter']">About</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="text-white text-xl font-semibold font-['Inter']">Company</header>
                    <a className="link link-hover">Why Car Doctor</a>
                    <a className="link link-hover">About</a>
                </nav>
                <nav>
                    <header className="text-white text-xl font-semibold font-['Inter']">Support</header>
                    <a className="link link-hover">Support Center</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Accesbility</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;