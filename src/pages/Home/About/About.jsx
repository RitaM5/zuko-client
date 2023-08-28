import React from 'react';
import AboutPage from '../../Shared/AboutPage';
import Cover from '../../Shared/Cover/Cover';
import photo4 from '../../../assets/photo-4.jpg'
const About = () => {
    return (
        <div className='my-20'>
            <Cover img={photo4} title="About"></Cover>
            <AboutPage className=""></AboutPage>
        </div>
    );
};

export default About;