import {FC, useState} from "react";
import {FiAlignLeft} from "react-icons/fi";
import {Link} from 'react-scroll';

interface dataNavType {
    href: string;
    to: string;
    title: string;
}

let data: dataNavType [] =
    [
        {href: '.', title: 'Portfolio', to: '#'},
        {href: 'home', title: 'Home', to: '#home'},
        {href: 'about', title: 'About', to: '#about'},
        {href: 'contact', title: 'Contact', to: '#contact'}
    ]

const Navbar: FC = () => {
    const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

    return (
        <div className="fixed z-[1000] w-full flex flex-wrap items-center justify-start px-5 py-3 bg-slate-900 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-xl font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white cursor-pointer"
                        to={data[0].to}
                        spy={true}
                        href={data[0].href}
                        smooth={true}
                        duration={300}
                        delay={100}
                        isDynamic={true}
                        spyThrottle={300}
                    >
                        {data[0].title}
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
                        {data.slice(1).map((item) => {
                            return (
                                <li className="nav-item" key={item.to}>
                                    <Link
                                        className="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white hover:opacity-75"
                                        to={item.to}
                                        href={item.href}
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

                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar