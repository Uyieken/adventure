import React from 'react';
import { Footer, Blog, Features, Header, Possibilities, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibilities />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
