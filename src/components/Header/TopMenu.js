import cookie from 'react-cookies'
import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ShareDataConsumer} from './../Contexts/ShareData';
import axios from 'axios';


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
		this.state={
			categories:[]
		}

	}

	componentDidMount(){
		axios.get('/category')
			 .then((res)=>{
			 	this.setState({
			 		categories: res.data
			 	})
			 })
			 .catch(err=> console.log(err))
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

			      

			       <li class="nav-item dropdown">
				        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				         	Sản phẩm
				        </Link>
				        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
				        {this.state.categories.map((category)=>{
				        	return <Link className="dropdown-item"  to={`/category/${category.name}`}>{category.name}</Link>
				        })}

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

			      <ShareDataConsumer>

			      {({isLogined})=>{

					if(!isLogined)    return  <li class="nav-item">
						        	<Link class="nav-link" to="/login">
						        	 Đăng nhập
						        	</Link>
					        	 </li>
			 		 }
			 		}

			      </ShareDataConsumer>

			      <li class="nav-item">
			        	<Link class="nav-link" to="/admin">
			        	 Admin
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