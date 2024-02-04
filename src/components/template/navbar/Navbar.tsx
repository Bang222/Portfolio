import {FC, useState} from "react";
import { FiAlignLeft } from "react-icons/fi";
import { Link} from 'react-scroll';



const Navbar:FC = ()  => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
    return(
        <div className="fixed z-[1000] w-full flex flex-wrap items-center justify-start px-5 py-3 bg-slate-900 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-xl font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer"
                        to="#"
                        spy={true}
                        href={'.'}
                        smooth={true}
                        duration={300}
                        delay={100}
                        isDynamic={true}
                        spyThrottle={300}
                    >
                        Portfolio
                    </Link>
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
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                to={"home"}
                                href={'#home'}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={50}
                                duration={300}
                                delay={100}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={300}
                            >

                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75 scroll-smooth"
                                to="about"
                                href={'#about'}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={50}
                                duration={300}
                                delay={100}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={300}
                            >
                                <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">About</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                to="projects"
                                href={'#projects'}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={50}
                                duration={300}
                                delay={100}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={300}
                            >
                                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Project</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                to="contact"
                                href={'#contact'}
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={50}
                                duration={300}
                                delay={100}
                                isDynamic={true}
                                ignoreCancelEvents={false}
                                spyThrottle={300}
                            >
                                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span
                                className="ml-2">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default  Navbar