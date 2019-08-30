import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

import About from './components/about';
import Home from './components/home';

import'./App.css';

class App extends Component {
    render() {
        return (
            <div>
                <p>我是App组件</p>
                <div className="test">
                	<div className="test2"></div>
                </div>
                <div>
                    <Link to="/home">跳到home</Link><br />
                    <Link to="/about">跳到about</Link>
                </div>
            </div>
        );
    }
}

export default App;