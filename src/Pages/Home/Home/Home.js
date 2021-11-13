import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;