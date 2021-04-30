import React, { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Staff from './components/Staff'
import Pets from './components/Pets'

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header"></header>
        <Switch>
            <Route path="/staffs/" component={Staff} />
            <Route path="/pets" component={Pets} />
          </Switch>
			</div>
		</Router>
	)
}

export default App
