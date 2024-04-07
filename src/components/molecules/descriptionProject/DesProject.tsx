import React, {FC, useState} from 'react';
import {dataPassProp} from '../../template/project/Project'

const DesProject: FC<dataPassProp> = (item: dataPassProp) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    const truncated: string = item.description.slice(0, 300);
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    //${styleCustomDescription} ${styleCustomTitle}
    return (
        <div>
            <h3 className={`text-2xl mb-3 ${item.styleCustomTitle}`}>
                <b><a href={`${item.link}`} className={'text-blue-500 underline'}
                      target={'blank'}>{item.title}</a><span> ({item.subTitle})</span></b>
            </h3>
            <p className={`text-[13px] text-justify ${item.styleCustomDescription}`}>
                {isExpanded ? item.description : truncated}
            </p>
            {item.description.length > 300 && (
                <span
                    className={`text-blue-500 cursor-pointer text-xs text-justify ${item.styleCustomDescription}`}
                    onClick={toggleExpand}
                >
                {isExpanded ? ' ...See less' : ' ...See more'}
              </span>
            )}
        </div>
    );
}

export default DesProject;