import React, {FC} from 'react';
import {FiArrowRight} from "react-icons/fi";
import PresentContactSocial from "../../molecules/presentContactSocial/PresentContactSocial";
import avataBang from "../../../assets/images/bang.jpeg"
import {FaFacebookSquare} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface propsHome {
}

const Home: FC = (propsHome) => {
    return (
        <div id={"home"} className={'flex justify-center'}>
            <div className={"mb-10 mt-[100px]"}>
                <div className={''}>
                    <p className={"pt-1 mt-1 text-pink-500"}> My name is</p>
                    <h1 className={"text-3xl pb-2 mb-2 font-bold"}> Danh Pham Cong Bang</h1>
                    <h2 className={"font-bold text-slate-500 text-2xl"}> I'm a developer fullstack</h2>
                    <p className={"pb-1 mb-1 text-gray-500"}> Hello! I'm a passionate Full-stack developer with
                        expertise in crafting flexible and maintainable web applications.
                        My focus is on delivering an outstanding user experience, both in terms of design and
                        functionality.
                        Strong teamwork and creativity are my assets, and I look forward to contributing to the success
                        of your project.
                    </p>
                </div>
                <div className={"flex justify-center items-center"}>
                    <div className={"lg:h-[300px] lg:w-[300px] rounded-full mx-2 my-5"}>
                        <img src={avataBang} alt={"ava"} className={"rounded-full"}/>
                    </div>
                </div>
                <div className={"flex justify-center"}>
                    <PresentContactSocial title={"https://github.com/Bang222"} color={'bg-sky-300'} icon={<FaGithub color={"black"}/>}/>
                    <PresentContactSocial title={"https://www.facebook.com/zeusoc/"} color={'bg-sky-300'} icon={<FaLinkedin color={"blue"}/>}/>
                    <PresentContactSocial title={"https://www.linkedin.com/in/bang-danh-pham-cong-919475250/"} color={'bg-sky-300'} icon={<FaFacebookSquare color={"blue"}/>}/>
                    {/*<PresentContactSocial color={'bg-sky-300'} icon={<FaFacebookSquare color={"blue"}/>}/>*/}
                </div>
                {/*<div className={'mt-7 md:mt-10 flex justify-center md:justify-start'}>*/}
                {/*    <button*/}
                {/*        className={'border-2 text-black flex px-6 py-3 my-2 items-center hover:bg-pink-500 hover:text-white group'}> View*/}
                {/*        Work <span className={'group-hover:rotate-90 duration-200'}> <FiArrowRight className={'ml-3'}/> </span>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Home;