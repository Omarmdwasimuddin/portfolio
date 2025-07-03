import React from 'react';
import TopHeader from '@/components/TopHeader';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast'


const PlainLayout = (props) => {
    return (
        <>
        <TopHeader/>
         <Header/>
          {props.children} 
          <Toaster />
          <Footer/> 
        </>
    );
};

export default PlainLayout;