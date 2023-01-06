import React from 'react';
import { Image } from "@zzwing/react-image";

const Picture = ({ club_image }) => {
    const { img } = club_image;
    // console.log(index);
    return (
        <div>
            <div className='shadow-lg'>
                <Image src={img} width={250} height={150} />
            </div>
        </div>
    );
};

export default Picture;