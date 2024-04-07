import React, {FC, useEffect, useRef} from 'react';
import PresentContactSocial from '../../molecules/presentContactSocial/PresentContactSocial';
import avataBang from '../../../assets/images/travelImagesProject/bang.jpeg';
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

interface home {
    contentName: string;
    name: string;
    whoAreU: string;
    description: string;
}

const data: home = {
    contentName: "My Name is",
    name: "Danh Pham Cong Bang",
    whoAreU: "I'm a developer fullstack",
    description: " Hello! I'm a passionate Full-stack developer with expertise in crafting flexible and\n" +
        "                            maintainable web applications.\n" +
        "                            My focus is on delivering an outstanding user experience, both in terms of design and\n" +
        "                            functionality.\n" +
        "                            Strong teamwork and creativity are my assets, and I look forward to contributing to the\n" +
        "                            success of your project."

}

const Home: FC = () => {
    const observer = useRef<IntersectionObserver | null>(null);
    const observerLeft = useRef<IntersectionObserver | null>(null);
    const observerMiddle = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                const {target, isIntersecting} = entry;
                if (isIntersecting) {
                    target.classList.add('animate-fadeLeft');
                    target.classList.remove('animate-fadeRight');
                    target.classList.add('opacity-1');
                    target.classList.remove('opacity-0');
                } else {
                    target.classList.remove('animate-fadeLeft');
                    target.classList.add('animate-fadeRight');
                    target.classList.add('opacity-0');
                    target.classList.remove('opacity-1');
                }
            })
        };
        const handleIntersectionMiddle = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                const {target, isIntersecting} = entry;
                if (isIntersecting) {
                    target.classList.add('animate-fadeIn');
                    target.classList.remove('animate-fadeOut');
                    target.classList.add('opacity-1');
                    target.classList.remove('opacity-0');
                } else {
                    target.classList.remove('animate-fadeIn');
                    target.classList.add('animate-fadeOut');
                    target.classList.add('opacity-0');
                    target.classList.remove('opacity-1');
                }
            })
        };
        const handleIntersectionLeft = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                const {target, isIntersecting} = entry;
                if (isIntersecting) {
                    target.classList.add('animate-fadeRight');
                    target.classList.remove('animate-fadeLeft');
                    target.classList.add('opacity-1');
                    target.classList.remove('opacity-0');
                } else {
                    target.classList.remove('animate-fadeRight');
                    target.classList.add('animate-fadeLeft');
                    target.classList.add('opacity-0');
                    target.classList.remove('opacity-1');
                }
            })
        };
        observerLeft.current = new IntersectionObserver(handleIntersectionLeft, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0, // Trigger when 50% of the element is visible
        });
        observerMiddle.current = new IntersectionObserver(handleIntersectionMiddle, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0, // Trigger when 50% of the element is visible
        });

        observer.current = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0, // Trigger when 50% of the element is visible
        });

        // Start observing the elements you want to track
        const elementsToObserve = document.querySelectorAll('.observe-right');
        const elementsToObserveLeft = document.querySelectorAll('.observe-home-left');
        const elementsToObserveMiddle = document.querySelectorAll('.observe-home-middle');

        elementsToObserve.forEach((element) => {
            observer.current?.observe(element);
        });
        elementsToObserveMiddle.forEach((element) => {
            observerMiddle.current?.observe(element);
        });
        elementsToObserveLeft.forEach((element) => {
            observerLeft.current?.observe(element);
        })
        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.current?.disconnect();
            observerLeft.current?.disconnect();
            observerMiddle.current?.disconnect();
        };
    }, [])
    return (
        <div className="flex justify-center relative">
            <div className="mb-10 mt-[100px]">
                <div className="overflow-hidden">
                    <div className="">
                        <p className="pt-1 mt-1 text-pink-500 observe-right"> {data.contentName}</p>
                        <h1 className="text-3xl pb-2 mb-2 font-bold observe-home-left">{data.name}</h1>
                        <h2 className="font-bold text-slate-500 text-2xl observe-right">{data.whoAreU}</h2>
                        <p className="pb-1 mb-1 text-gray-500 observe-home-left text-justify">
                            {data.description}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="lg:h-[300px] lg:w-[300px] rounded-full mx-2 my-5">
                        <img src={avataBang} alt="ava" className="rounded-full"/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <PresentContactSocial title="https://github.com/Bang222" color="bg-sky-300 observe-right"
                                          icon={<FaGithub color="black"/>}/>
                    <PresentContactSocial title="https://www.linkedin.com/in/bang-danh-pham-cong-919475250/"
                                          color="bg-sky-300 observe-home-middle" icon={<FaLinkedin color="blue"/>}/>
                    <PresentContactSocial title="https://www.facebook.com/zeusoc/" color="bg-sky-300 observe-home-left"
                                          icon={<FaFacebookSquare color="blue"/>}/>
                </div>
                <div id={'about'} className={'absolute bg-pink-500 bottom-24'}>
                </div>
            </div>
        </div>
    );
};

export default Home;
