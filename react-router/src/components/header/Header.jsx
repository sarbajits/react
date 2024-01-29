import React from "react";
import { Link, NavLink } from "react-router-dom"
import Tabs from "./Tabs";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://pbs.twimg.com/media/CcYA6QzUMAARyBH.jpg"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="/signup"
                            className="text-white bg-[#a10b04] hover:bg-[#a10b20] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            <Tabs
                            address=""
                            tabName="Home" />

                            <Tabs
                            address="about" tabName="About" />

                            <Tabs
                            address="contact" tabName="Conctact Us" />

                            <Tabs
                            address="github" tabName="Github" />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

