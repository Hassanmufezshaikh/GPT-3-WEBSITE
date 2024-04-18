import React from 'react'
import {Navbar,Cta,Brand} from './components'
import {Blog,Footer,Header,Possibility,WhatGPT3,Features} from './containers'
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      {/* <Article /> */}
      <Blog />
      <Footer />
    </div>
  )
}

export default App
