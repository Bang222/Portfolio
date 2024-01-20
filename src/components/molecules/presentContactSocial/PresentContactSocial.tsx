import React, {FC} from 'react';


interface PropsPresentContactSocial {
    icon: React.ReactNode; // Define the prop for the icon
    color: string;
    title:string;
}

const PresentContactSocial: FC<PropsPresentContactSocial> = ({color, icon,title}) => {
    return (
            <div className={`h-[30px] w-[30px] hover:opacity-75 ${color} rounded-full mx-2 flex items-center justify-center`}>
                 <a href={title} target="_blank" className={''} rel="noreferrer">{icon}</a>
            </div>
    );
};

export default PresentContactSocial;