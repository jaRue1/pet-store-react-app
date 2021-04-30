
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Staff from './components/Staff'
import Pets from './components/Pets'

function App() {

  return (
    <Router>
       <section>
          <div className="App">
            <header className="App-header">
              <Switch>
                <Route path="/staffs/" component={Staff} />
                <Route path="/pets" component={Pets} />
             </Switch>
              <Header/>
            </header>
            <section className="main-section">
             <Main/>
            </section>

            <section>
                <Footer />
            </section>
          </div>
          </section>
    	</Router>
  );
}

export default App
