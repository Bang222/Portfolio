import Title from "../../molecules/title/Title";
import React, { FC, useEffect, useRef } from 'react';

interface propsAbout {
}

const About: FC<propsAbout> = () => {
    const observer = useRef<IntersectionObserver | null>(null);
    const observerTop = useRef<IntersectionObserver | null>(null);
    useEffect(() =>{
        const handleIntersection  = (entries:IntersectionObserverEntry[] ) => {
        entries.forEach(entry => {
            const { target, isIntersecting } = entry;
            if(isIntersecting) {
                target.classList.add('animate-fadeIn');
                target.classList.remove('animate-fadeOut');
                target.classList.add('opacity-1');
                target.classList.remove('opacity-0');
            }
            else{
                target.classList.remove('animate-fadeIn');
                target.classList.add('animate-fadeOut');
                target.classList.add('opacity-0');
                target.classList.remove('opacity-1');
            }
        })
    };
        const handleIntersectionTop  = (entries:IntersectionObserverEntry[] ) => {
            entries.forEach(entry => {
                const { target, isIntersecting } = entry;
                if(isIntersecting) {
                    target.classList.add('animate-fadeOut');
                    target.classList.remove('animate-fadeIn');
                    target.classList.add('opacity-1');
                    target.classList.remove('opacity-0');
                }
                else{
                    target.classList.remove('animate-fadeOut');
                    target.classList.add('animate-fadeIn');
                    target.classList.add('opacity-0');
                    target.classList.remove('opacity-1');
                }
            })
        };
        observer.current = new IntersectionObserver(handleIntersection, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0, // Trigger when 50% of the element is visible
        });
        observerTop.current = new IntersectionObserver(handleIntersectionTop, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin
            threshold: 0, // Trigger when 50% of the element is visible
        });

        // Start observing the elements you want to track
        const elementsToObserve = document.querySelectorAll('.observe-me');
        const elementsToObserveTop = document.querySelectorAll('.observe-top');

        elementsToObserve.forEach((element) => {
            observer.current?.observe(element);
        });
        elementsToObserveTop.forEach((element) => {
            observerTop.current?.observe(element);
        });

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            observer.current?.disconnect();
            observerTop.current?.disconnect();
        };
    },[])
    return (
        <div className={"relative overflow-hidden"}>
            <div className='w-full pb-10'>
                <div className='flex flex-col w-full h-full mt-5'>
                    <Title title={"About"} textPosition={'text-left'}/>
                    <div className='w-full grid sm:grid-cols-2 gap-10'>
                        <div className='sm:text-right text-3xl font-bold observe-me'>
                            <p>Hi. I'm Danh Bang, nice to meet you Please take a look around .</p>
                        </div>
                        <div>
                            <p className={"text-xl text-gray-600 observe-me"}>
                                I'm currently a senior collecting student majoring in information technology at Greenwich University.
                                I love technology and I wanna create something new, something great. I have strengths in JavaScript, TypeScript,
                                and Reactjs,Nestjs. I am eager to become a fresher, In order to foster a lasting connection
                                to create values and accumulate experience for myself to develop and tend to software engineer professional
                            </p>
                        </div>
                    </div>
                </div>
                <div id={'projects'} className={'absolute bottom-24'}>
                </div>
            </div>
        </div>

    );
}

export default About;