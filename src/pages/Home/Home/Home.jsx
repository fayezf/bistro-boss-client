import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../ChefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import PopularSalad from '../PopularSalad/PopularSalad';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <PopularSalad></PopularSalad>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;