
import React, {Component } from 'react';
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Form
} from 'reactstrap';

import  './Header.css'







class TopMenu extends Component{
	constructor(props){
		super(props);


	}



    render(){
    	return (
		    <nav class="navbar navbar-expand-lg navbar-dark bg-dark topmenu" >
		    {/*<Link class="navbar-brand"> <Link to="/">Flash Shop</Link></Link>*/}
			  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
			    <span class="navbar-toggler-icon"></span>
			  </button>
			  

			  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
			    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

			    
			      <li class="nav-item">
			        	<Link class="nav-link" to="/">
			        	 Trang chủ
			        	</Link>
			      </li>

			       <li class="nav-item">
			        <a class="nav-link" href="#">Link</a>
			      </li>

			      

			       <li class="nav-item dropdown">
				        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Dropdown link
				        </Link>
				        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				          <Link class="dropdown-item" to="#">Action</Link>
				          <Link class="dropdown-item" to="#">Another action</Link>
				          <Link class="dropdown-item" to="#">Something else here</Link>
				        </div>
			      </li>


			      <li class="nav-item">
			        	<Link class="nav-link" to="/about">
			        	 Giới thiệu
			        	</Link>
			      </li>

			       <li class="nav-item">
			        	<Link class="nav-link" to="/contact">
			        	 Liên hệ
			        	</Link>
			      </li>
			    </ul>

			     <form class="form-inline my-2 my-lg-0">
			      <input class="form-control mr-sm-2" type="search" placeholder="Search" />
			      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			    </form>
			   
			  </div>
			</nav>

  		);

    }

    
}


export default TopMenu