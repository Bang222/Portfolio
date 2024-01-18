import React, {FC} from 'react';

interface propsLineComponent {
}

const LineComponent: FC<propsLineComponent> = () => {
    return (
        <div className={'w-full flex justify-center'}>
            <div style={{backgroundColor: '#A9A9A9', width:"100%", height: '1px'}}>

            </div>
        </div>
    );

}

export default LineComponent;