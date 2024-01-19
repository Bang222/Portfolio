import React, {FC, useState} from 'react';

interface propsDesProject {
    description: string
    title:string
    subTitle:string
    styleCustomDescription?:string
    styleCustomTitle?:string
    href?:string
}

const DesProject: FC<propsDesProject> = ({description,title,subTitle,styleCustomDescription,styleCustomTitle,href}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const truncated: string = description.slice(0, 300);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    //${styleCustomDescription} ${styleCustomTitle}
    return (
        <div>
            <h3 className={`text-2xl mb-3 ${styleCustomTitle}`}>
                <b><a href={href} target={'blank'}>{title}</a>({subTitle}) </b>
            </h3>
            <p className={`text-[13px] ${styleCustomDescription}`}>
                {isExpanded ? description : truncated}
            </p>
            {description.length > 300 && (
                <span
                    className={`text-blue-500 cursor-pointer text-xs ${styleCustomDescription}`}
                    onClick={toggleExpand}
                >
                {isExpanded ? ' ...See less' : ' ...See more'}
              </span>
            )}
        </div>
    );
}

export default DesProject;