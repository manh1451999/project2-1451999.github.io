import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import TopMenu from './components/Header/TopMenu'
import Slide from './components/Header/Slide'
import TopbarLogo from './components/Header/TopbarLogo'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About.js'

function App() {
  return (
  	<Router>

	 		  <TopbarLogo />
		      <TopMenu />


		      <Switch>
		          <Route exact path="/">
		            <Slide />
		          </Route>
		      </Switch>


		      {/*<div className="container" >*/}

		      <div className="container" >
			        <Switch>

				          <Route exact path="/about">
					            <About />
				          </Route>

				          <Route exact path="/">
				            <Home />
				          </Route>

				        

				          
			        </Switch>
		      </div>


		      <Footer />
    </Router>
  );
}

export default App;
