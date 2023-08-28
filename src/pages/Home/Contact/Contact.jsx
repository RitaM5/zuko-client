import React from 'react';
import ContactPage from './ContactPage';
import Cover from '../../Shared/Cover/Cover';
import photo3 from '../../../assets/photo-3.jpg'
const Contact = () => {
    return (
        <div className='my-20'>
             <Cover img={photo3} title="CONTACT"></Cover>
            <ContactPage></ContactPage>
        </div>
    );
};

export default Contact;