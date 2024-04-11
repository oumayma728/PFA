import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Main from './components/Main/Main';
import Box from './components/Box/Box';
import Footer from './components/Footer/Footer';
import Animaux from './components/Animaux/Aniamux';
import Bobby from "./bobby.jpg"
import malih from './malih.jpg'
import fatfeta from './fatfeta.jpg'
import Voir from './Pages/Voir/voir';

function App() {
  return (
    <>
    <Header/>
    <Body/>
    <Main/>
    <Animaux img={Bobby} name={"bobby"} local={"bizerte"}/>
    <Animaux img={malih} name={"malih"} local={"Beb el khadra"}/>
    <Animaux img={fatfeta} name={"fatfeta"} local={"Lac"}/>
    <Footer
  

    />
    <Box/>
    </>
  );
}

export default App;

