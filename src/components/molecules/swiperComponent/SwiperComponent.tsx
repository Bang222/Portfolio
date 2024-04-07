import React, {FC} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {ImagesSwiper} from "../../template/project/Project";

import 'swiper/css';
import 'swiper/css/navigation';

interface propsSwiper {
    images: ImagesSwiper[]
}

const SwiperComponent: FC<propsSwiper> = ({images}) => {
    return (

        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
            }}
            className="mySwiper"
        >
            {images.map((value, index) => {
                return (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <SwiperSlide key={value.id}><img className={'h-[300px] md:h-[350px] md:w-[450px] object-cover'}
                                                     src={value.images} alt={`image${index}`}/></SwiperSlide>
                )
            })}
        </Swiper>
    );
}

export default SwiperComponent;