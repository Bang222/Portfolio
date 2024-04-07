import React, {useEffect, useRef, useState} from 'react';

import Title from "../../molecules/title/Title";
import logo from '../../../assets/images/travelImagesProject/logo.png'
import background from '../../../assets/images/travelImagesProject/backgrounds.png'
import tourPage from '../../../assets/images/travelImagesProject/tourPage.png'
import login from '../../../assets/images/travelImagesProject/login.png'
import register from '../../../assets/images/travelImagesProject/register.png'
import experience from '../../../assets/images/travelImagesProject/experience.png'
import DesProject from "../../molecules/descriptionProject/DesProject";
import SwiperComponent from "../../molecules/swiperComponent/SwiperComponent";
import loginEnterPrise from "../../../assets/images/Enterprise/login.png"
import homeEnterPrise from "../../../assets/images/Enterprise/home.png"
import createPostEnterPrise from "../../../assets/images/Enterprise/createPost.png"
import postEnterprise from "../../../assets/images/Enterprise/post.png"
import homePageST from "../../../assets/images/STUnited/STPage.png"

export interface ImagesSwiper {
    id: number
    images: string
}

export interface dataPassProp {
    description: string,
    styleCustomDescription: string,
    link: string,
    styleCustomTitle: string,
    title: string,
    subTitle: string,
}

interface allDataPass extends dataPassProp {
    id: number,
    images: ImagesSwiper[],

}

const descriptionTravel: string = '  Da Nang Tourism is a comprehensive platform that amalgamates the functionality of a sales website with social networking aspects, enabling users to share their experiences with those who plan to visit Da Nang. The platform provides information about local restaurants, tourist attractions, upcoming events, and festivals in Da Nang, such as music events and hot air balloon rides. It also highlights regular attractions like the fire-breathing Dragon Bridge and Han River Bridge.\n' +
    '                        Users can contribute to the platform by uploading photos of picturesque locations in Da Nang. This feature assists both aspiring travelers looking for inspiration and those seeking to plan their independent journeys to Da Nang.\n' +
    '                        For the convenience of our diverse customer base, we also offer tour packages to ensure a safe and comprehensive travel experience. Our clientele primarily consists of families and middle-aged individuals.'
const descriptionEnterprise: string = 'Presenting a website I\'ve developed to gather improvement ideas from a large university\'s staff, focusing on web safety. ' +
    'Utilizing advanced technologies, the platform invites users to share opinions on web security. ' +
    'Accessible across devices, it boasts a user-friendly interface for easy navigation. Admins can create, manage questions, and collect comments via innovative generators.' +
    ' Comments are categorized, facilitating efficient analysis. Automated statistics provide administrators with an overview of prevalent issues, aiding solutions.' +
    ' With high safety standards, this platform empowers university staff to actively contribute ideas, fostering continual improvement in addressing web safety concerns.'
const descriptionSTPage: string = 'I embarked on a front-end project centered around creating a StUnited page while implementing Scrum methodologies for effective project management. This endeavor marked my initiation into JavaScript and React.js as I delved into the intricate process of constructing a project. The project involved cloning it onto the StUnited page.\n' +
    '\n' +
    'Our team comprised six dedicated members, each assigned distinct roles. In my capacity as the team lead, I undertook the responsibility of task allocation, coding, and overseeing the project\'s runtime. Node.js was employed as the backend framework, facilitating the creation of APIs, and MongoDB served as our database, seamlessly integrated with Mongoose as the Object-Relational Mapping (ORM) tool.\n' +
    '\n' +
    'Remarkably, this comprehensive project was successfully executed within a month and a half, showcasing the collective efforts and rapid learning curve experienced during our internship.'
const travel: ImagesSwiper[] = [
    {id: 1, images: logo},
    {id: 2, images: background},
    {id: 3, images: login},
    {id: 4, images: register},
    {id: 5, images: tourPage},
    {id: 6, images: experience},
];
const enterpriseImages: ImagesSwiper[] = [
    {id: 1, images: homeEnterPrise},
    {id: 2, images: postEnterprise},
    {id: 3, images: createPostEnterPrise},
    {id: 4, images: loginEnterPrise},
];
const STImages: ImagesSwiper[] = [
    {id: 1, images: homePageST},
];

const data: allDataPass[] = [
    {
        id: 1,
        description: descriptionTravel,
        images: travel,
        styleCustomDescription: "observe-right",
        link: "https://github.com/Bang222/Final-Year",
        styleCustomTitle: "observe-home-left",
        title: "Da Nang Travel",
        subTitle: "Final Project",
    },
    {
        id: 2,
        description: descriptionEnterprise,
        images: enterpriseImages,
        styleCustomDescription: "observe-right",
        link: "https://github.com/Bang222/Enterpriess-2023",
        styleCustomTitle: "observe-home-left",
        title: "Projects Enterprise",
        subTitle: "Project"
    },
    {
        id: 3,
        description: descriptionSTPage,
        images: STImages,
        styleCustomDescription: "observe-right",
        link: "https://github.com/Bang222/page-stUnited",
        styleCustomTitle: "observe-home-left",
        title: "ST United Web",
        subTitle: "Internship"
    },
]

const Project = () => {
    const observer = useRef<IntersectionObserver | null>(null);
    const observerLeft = useRef<IntersectionObserver | null>(null);
    const observerMiddle = useRef<IntersectionObserver | null>(null);

    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clear the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
        <div className={'pb-5 mt-7 overflow-hidden relative'}>
            <div className={''}>
                <Title title={'Projects'} textPosition={'text-right'}/>
                {data.map((item: allDataPass) => {
                    const {id, images, ...dataPassPropsObjectRemoveValueAndId}: allDataPass = {...item};
                    return width < 667 ?
                        <div className={"mb-7 pb-3"} key={item.id}>
                            <div className={"md:grid md:grid-cols-2 gap-10"}>
                                <DesProject {...dataPassPropsObjectRemoveValueAndId} />
                                <div className={`ml-3 ${item.styleCustomDescription}`}>
                                    <SwiperComponent images={images}/>
                                </div>
                            </div>
                        </div>
                        :
                        (
                            item.id % 2 === 0 ?
                                <div className={"mb-7 pb-3"} key={item.id}>
                                    <div className={"md:grid md:grid-cols-2 gap-10"}>
                                        <DesProject {...dataPassPropsObjectRemoveValueAndId} />
                                        <div className={`ml-3 ${item.styleCustomDescription}`}>
                                            <SwiperComponent images={images}/>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className={"mb-7 pb-3"} key={item.id}>
                                    <div className={"md:grid md:grid-cols-2 gap-10"}>
                                        <div className={`ml-3 ${item.styleCustomDescription}`}>
                                            <SwiperComponent images={images}/>
                                        </div>
                                        <DesProject {...dataPassPropsObjectRemoveValueAndId} />
                                    </div>
                                </div>
                        )

                })}
            </div>
        </div>
    )
}

export default Project;