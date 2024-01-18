import React, {FC} from 'react';

interface propsTitle {
    title: string;
    textPosition:string;
}

const Title: FC<propsTitle> = ({title,textPosition}) => {
    return (
        <div className='w-full mb-12'>
            <div className={`w-full ${textPosition}`}>
                <p className='text-5xl md:text-7xl text-gray-800 font-bold inline border-b-4 border-pink-600 mb-4'>
                    {title}
                </p>
            </div>
        </div>
    );
}

export default Title;