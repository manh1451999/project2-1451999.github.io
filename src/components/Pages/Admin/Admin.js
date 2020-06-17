import React, {Component} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Admin.css'

import Product from './Product/Product'
import Category from './Category/Category'


export default class Admin extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Router>

				<div class="container-fluid">
				    <div class="row">
				        <div class="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
				            <ul class="nav flex-column flex-nowrap overflow-hidden">

				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/product"><i class="fa fa-product-hunt"></i> <span class="d-none d-sm-inline">Product</span></Link></li>
				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/user"><i class="fa fa-user"></i><span class="d-none d-sm-inline">User</span></Link></li>
				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/category"><i class="fa fa-home"></i> <span class="d-none d-sm-inline">Category</span></Link></li>
				                <li class="nav-item"><Link class="nav-link text-truncate" to="/admin/user"><i class="fa fa-cart-plus"></i> <span class="d-none d-sm-inline">Order</span></Link></li>
				                {/*<li class="nav-item">
				                    <a class="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="fa fa-table"></i> <span class="d-none d-sm-inline">Reports</span></a>
				                    <div class="collapse" id="submenu1" aria-expanded="false">
				                        <ul class="flex-column pl-2 nav">
				                            <li class="nav-item"><a class="nav-link py-0" href="#"><span>Orders</span></a></li>
				                            <li class="nav-item">
				                                <a class="nav-link collapsed py-1" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1"><span>Customers</span></a>
				                                <div class="collapse" id="submenu1sub1" aria-expanded="false">
				                                    <ul class="flex-column nav pl-4">
				                                        <li class="nav-item">
				                                            <a class="nav-link p-1" href="#">
				                                                <i class="fa fa-fw fa-clock-o"></i> Daily </a>
				                                        </li>
				                                        <li class="nav-item">
				                                            <a class="nav-link p-1" href="#">
				                                                <i class="fa fa-fw fa-dashboard"></i> Dashboard </a>
				                                        </li>
				                                        <li class="nav-item">
				                                            <a class="nav-link p-1" href="#">
				                                                <i class="fa fa-fw fa-bar-chart"></i> Charts </a>
				                                        </li>
				                                        <li class="nav-item">
				                                            <a class="nav-link p-1" href="#">
				                                                <i class="fa fa-fw fa-compass"></i> Areas </a>
				                                        </li>
				                                    </ul>
				                                </div>
				                            </li>
				                        </ul>
				                    </div>
				                </li>*/}
				                
				            </ul>
				        </div>
				        <div class="col pt-2">
				            <Switch>
						 		 <Route exact path="/admin">
								       <h1>Đây là quản lý product</h1>
							    </Route>


								<Route exact path="/admin/product">
								       <Product />
							    </Route>

							    <Route exact path="/admin/category">
								       <Category />
							    </Route>

							    <Route exact path="/admin/user">
								       <h1>Đây là quản lý user</h1>
							    </Route>

							</Switch>
				        </div>
				    </div>
				</div>


				


			</Router>



				
			)
	}
}