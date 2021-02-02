
import './App.css';
import 'antd/dist/antd.css';
import Main from './components/main';
import AntdSlider from './components/antdSlider';
import Animation from './components/Animation';
// import Info from './components/Info';
// import Pros from './components/Pros';
// import Posts from './components/posts';
import ShortSlider from './components/ShortSlider';
import Footer from './components/Footer';
import Menu from './components/Menu';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  
  return (
    <>  
        <Menu/>
        
        <Main/>
        
    </>
    
  );
}

export default App;






