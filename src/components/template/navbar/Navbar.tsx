import {FC, useState} from "react";
import { FiAlignLeft } from "react-icons/fi";

const Navbar:FC = ()  => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    return(
        <div className="fixed w-full flex flex-wrap items-center justify-start px-5 py-3 bg-slate-900 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-xl font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        href="#"
                    >
                        DPCB
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <FiAlignLeft/>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center justify-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href="#home"
                            >
                                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75 scroll-smooth"
                                href="#about"
                            >
                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href="#skills"
                            >
                                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Skills</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href="#project"
                            >
                                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Project</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                href="#contact"
                            >
                                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default  Navbar