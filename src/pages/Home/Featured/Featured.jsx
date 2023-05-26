import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import moment from 'moment';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle
            subHeading="check it out"
            heading="Featured Item"
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>{moment().format('MMMM D, YYYY')}</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, ab magni excepturi sit nisi pariatur minima quibusdam inventore tenetur, eaque voluptates quos vel sunt adipisci ea cum quo recusandae doloribus eos placeat obcaecati eum. Neque voluptatem libero dolor laboriosam aperiam quam amet aliquid, quos vel recusandae? Impedit illo recusandae et.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;