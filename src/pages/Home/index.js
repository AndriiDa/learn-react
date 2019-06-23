import React from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header'
import Main from '../../components/Main'
import Footer from '../../components/Footer'

const Home = (props) => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Main />
      <Footer />     
    </>
  );
}


export default Home