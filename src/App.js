import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends React.Component{
    render() {
        return (
          <div className='container'>
            <Header/> 
            <h1>Hola, La estructura del proyecto esta lista.</h1>
            <p className='col-12'>Inclusion de los estilos de bootstrap mediante cdn.</p>

            <Footer/>
          </div>

        );
      }
   
}

export default App;
