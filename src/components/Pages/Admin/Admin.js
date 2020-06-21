import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './Admin.css'

import Product from './Product/Product'
import Category from './Category/Category'
import User from './User/User'
import Order from './Order/Order'
import Login from './../LoginAdmin/LoginAdmin'
import axios from 'axios';
import cookie from 'react-cookies'

import {ShareDataConsumer} from './../../Contexts/ShareData'


export default class Admin extends Component{
	constructor(props){
		super(props);
		console.log('admin constructor')
	}
	render(){

       if(cookie.load('isAdmin')!="true")
        return <Redirect to="/login/admin" />;
      else
		return (
			<Router>

				<div class="container-fluid">
				    <div class="row">
				        <div class="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
				            <ul class="nav flex-column flex-nowrap overflow-hidden">

				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/product"><i class="fa fa-product-hunt"></i> <span class="d-none d-sm-inline">Product</span></Link></li>
				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/user"><i class="fa fa-user"></i><span class="d-none d-sm-inline">User</span></Link></li>
				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/category"><i class="fa fa-home"></i> <span class="d-none d-sm-inline">Category</span></Link></li>
				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/order"><i class="fa fa-cart-plus"></i> <span class="d-none d-sm-inline">Order</span></Link></li>
				                 <ShareDataConsumer>
				    				  {({ logout})=>{
						                return  (<li class="nav-item" onClick={e=>logout()}><Link class="nav-link text-truncate"><i class="fas fa-sign-out-alt"></i> <span class="d-none d-sm-inline">Đăng xuất</span></Link></li>)
						                }}
				                 </ShareDataConsumer>

				            </ul>
				        </div>
				        <div class="col pt-2">
				            <Switch>

				            	 <Route exact path="/admin/login">
								       <Login />
							    </Route>
						 		 <Route exact path="/admin">
								        <Redirect to="/admin/product" />
							    </Route>


								<Route exact path="/admin/product">
								       <Product />
							    </Route>

							    <Route exact path="/admin/category">
								       <Category />
							    </Route>

							    <Route exact path="/admin/user">
								       <User />
							    </Route>

							    <Route exact path="/admin/order">
								       <Order />
							    </Route>

							    

							</Switch>
				        </div>
				    </div>
				</div>


				


			</Router>



				
			)
	}
}