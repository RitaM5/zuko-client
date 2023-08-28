import React from 'react';
import AllPictures from './AllPictures';
import photo2 from '../../../assets/photo-2.jpg'
import Cover from '../../Shared/Cover/Cover';
const Gallery = () => {
    return (
        <div>
            <Cover img={photo2} title="GALLERIES"></Cover>
            <AllPictures></AllPictures>
        </div>
    );
};

export default Gallery;