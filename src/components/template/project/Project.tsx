import React, {FC, useState} from 'react';
import Title from "../../molecules/title/Title";
import logo from '../../../assets/images/travelImagesProject/logo.png'
import background from '../../../assets/images/travelImagesProject/backgrounds.png'
import tourPage from '../../../assets/images/travelImagesProject/tourPage.png'
import login from '../../../assets/images/travelImagesProject/login.png'
import register from '../../../assets/images/travelImagesProject/register.png'
import experience from '../../../assets/images/travelImagesProject/experience.png'
import DesProject from "../../molecules/descriptionProject/DesProject";
import SwiperComponent from "../../molecules/swiperComponent/SwiperComponent";

export interface ImagesSwiper {
    id: number
    images: string
}

interface propsSkill {
}

const Project: FC<propsSkill> = () => {
    const descriptionTravel: string = '  Da Nang Tourism is a comprehensive platform that amalgamates the functionality of a sales website with social networking aspects, enabling users to share their experiences with those who plan to visit Da Nang. The platform provides information about local restaurants, tourist attractions, upcoming events, and festivals in Da Nang, such as music events and hot air balloon rides. It also highlights regular attractions like the fire-breathing Dragon Bridge and Han River Bridge.\n' +
        '                        Users can contribute to the platform by uploading photos of picturesque locations in Da Nang. This feature assists both aspiring travelers looking for inspiration and those seeking to plan their independent journeys to Da Nang.\n' +
        '                        For the convenience of our diverse customer base, we also offer tour packages to ensure a safe and comprehensive travel experience. Our clientele primarily consists of families and middle-aged individuals.'

    const travel: ImagesSwiper[] = [
        {id: 1, images: logo},
        {id: 2, images: background},
        {id: 3, images: login},
        {id: 4, images: register},
        {id: 5, images: tourPage},
        {id: 6, images: experience},
    ];

    return (
        <div className={'pb-5 mt-7'}>
            <div className={'lg:block hidden'}>
                <div className={"mb-7 pb-3"}>
                    <Title title={'Projects'} textPosition={'text-right'}/>
                    <div className={"md:grid md:grid-cols-2 gap-10"}>
                        <DesProject description={descriptionTravel} title={'1. Travel Website'}
                                    subTitle={'Final Year'}/>
                        <div className={"ml-3"}>
                            <SwiperComponent images={travel}/>
                        </div>
                    </div>
                </div>
                <div className={"mb-7 pb-3"}>
                    <div className={"md:grid md:grid-cols-2 gap-10"}>
                        <div className={"ml-3"}>
                            <SwiperComponent images={travel}/>
                        </div>
                        <DesProject description={descriptionTravel} title={'1. Travel Website'}
                                    subTitle={'Final Year'}/>
                    </div>
                </div>
            </div>
            {/*Mobile*/}
            <div className={'block lg:hidden'}>
                <div className={"mb-7 pb-3"}>
                    <Title title={'Projects'} textPosition={'text-left'}/>
                    <div className={"md:grid md:grid-cols-2 gap-10"}>
                        <DesProject description={descriptionTravel} title={'1. Travel Website'}
                                    subTitle={'Final Year'}/>
                        <div className={"ml-3"}>
                            <SwiperComponent images={travel}/>
                        </div>
                    </div>
                </div>
                <div className={"mb-7 pb-3"}>
                    <div className={"md:grid md:grid-cols-2 gap-10"}>
                        <DesProject description={descriptionTravel} title={'1. Travel Website'}
                                    subTitle={'Final Year'}/>
                        <div className={"ml-3"}>
                            <SwiperComponent images={travel}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;