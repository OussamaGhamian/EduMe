// eslint-disable-next-line
import React, { Component } from "react";
// import ReactDom from 'react-dom'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/index'
import News from './components/News'
import ContactUs from './components/contactUs'
import "./App.css";
import fbIcn from "./img/fbIcon.png"
import ytIcn from "./img/ytIcon.png"
import igIcn from "./img/instaIcon.png"
import tyIcn from "./img/twtIcon.png"
export default function App() {
  return (
    <>
        <BrowserRouter >
        <Header component={'batatat'} />

            <Switch >
                <Route path='/'
                    component={Main}
                    exact />

                <Route path='/news'
                    component={News} />
                <Route path='/contact'
                    component={ContactUs} />
            </Switch>

            
        </BrowserRouter>
        <Footer fb={fbIcn}
            insta={igIcn}
            yt={ytIcn}
            tw={tyIcn} /> 
      
    </>
  );
}
