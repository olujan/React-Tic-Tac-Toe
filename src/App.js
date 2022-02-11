import React from 'react';
import './App.css';
import "./styles/game.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Game from "./components/common/Game";


class App extends React.Component{
    render() {
        return (
          <div className='container'>
            <Header/> 
            <Game/>
            <Footer/>
          </div>

        );
      }
   
}

export default App;
