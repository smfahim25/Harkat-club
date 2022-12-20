import React from 'react';
import { useParams } from 'react-router';
import { useGetClubImagesQuery } from '../../app/EndPoints/baseEndpoints';
import PicturesLoading from '../isLoading/PicturesLoading';
import Picture from '../Picture/Picture';

const Pictures = () => {
    const { id } = useParams();
    const page_number = 1;
    const { data: club_images, isLoading } = useGetClubImagesQuery({ id, page_number });
    return (
        <div>
            {
                isLoading ? <div className='flex flex-col justify-center items-center mt-40'><PicturesLoading /> </div> : <div className='grid grid-cols-4 gap-1'> {club_images?.results?.map(club_image => <Picture key={club_image.HarkatImages_id
                } post={club_image}></Picture>)}</div>
            }
        </div>
    );
};

export default Pictures;