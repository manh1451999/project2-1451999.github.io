import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import TopMenu from './components/Header/TopMenu'
import Slide from './components/Header/Slide'
import TopbarLogo from './components/Header/TopbarLogo'
import Footer from './components/Footer/Footer'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'
import Contact from './components/Pages/Contact/Contact'
import Login from './components/Pages/Login/Login'
import Signup from './components/Pages/Login/Signup'
import SignupTest from './components/Pages/Login/SignupTest'
import ProductDetail from './components/Pages/ProductDetail/ProductDetail'
import Cart from './components/Pages/Cart/Cart'
import Admin from './components/Pages/Admin/Admin';
import {ShareDataProvider, ShareDataConsumer, ShareContext} from './components/Contexts/ShareData'

function App() {
  return (
  	<ShareDataProvider>
  	<Router>

	 		  <TopbarLogo />   
	 		  {/*logo dang bi tran ra ngoai*/}
		      <TopMenu />

		     
	          <Route exact path="/">
	            <Slide />
	          </Route>
		    

	          <Route exact path="/login">
	            <Login />
	          </Route>

	      {/*     <Route exact path="/sign-up">
	            <SignupTest />
	          </Route>*/}

	          <Route exact path="/sign-up">
	            <Signup />
	          </Route>

	          <Route  path="/admin">
	            <Admin />
	          </Route>



		      <div className="container" >
			        <Switch>

				          <Route path="/cart/:userId" exact component={Cart} />


				          <Route exact path="/about">
					            <About />
				          </Route>

				          <Route path="/product/:id" exact component={ProductDetail} />

				          {/*<Route  exact path="/product/:id">
					            <ProductDetail />
				          </Route>
*/}
				          <Route exact path="/contact">
				            <Contact />
				          </Route>


				          <Route exact path="/">
				            <Home />
				          </Route>

		



				        

				          
			        </Switch>
		      </div>


	 		  {/*Footer dang bi tran ra ngoai*/}
		      <Footer />
    </Router>
    </ShareDataProvider>
  );
}

export default App;
