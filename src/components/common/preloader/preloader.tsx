import React from 'react';
import preloader from "../../../assets/images/preloader.gif";

export const Preloader = () => {
    return (
        <div>
            <img style={{width: '50px', height: '50px'}} src={preloader} alt={''}/>
        </div>
    );
};

