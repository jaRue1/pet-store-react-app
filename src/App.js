import './App.css';

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';




function App() {

  return (
   <section>
      <div className="App">
        <header className="App-header">
          <Header  />
        </header>


        <section className="main-section">
         <Main/>
        </section>



        <section>
        <Footer />
        </section>
      </div>
      </section>
  );
}

export default App;
