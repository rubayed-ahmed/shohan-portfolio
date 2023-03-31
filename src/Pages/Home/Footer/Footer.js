import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-10 md:px-20 lg:px-40 md:py-24 text-center bg-rose-500">
            <h3 className="text-3xl">Rubayed Ahmed</h3>
            <ul className="flex items-center justify-center my-6 gap-12">
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="flex justify-center gap-4 mt-12 mb-5">
                <span className="bg-white text-rose-500 p-3 rounded-lg text-xl"><FaFacebook/></span>
                <span className="bg-white text-rose-500 p-3 rounded-lg text-xl"><FaLinkedin/></span>
                <span className="bg-white text-rose-500 p-3 rounded-lg text-xl"><FaInstagram/></span>
            </div>
            <p className="pt-6"> © Rubayed Ahmed | All Right Reserved</p>
        </footer>
    );
};

export default Footer;