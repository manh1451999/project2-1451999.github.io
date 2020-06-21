import React, {Component} from 'react';
import  './Header.css'
import cookie from 'react-cookies'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {ShareDataProvider, ShareDataConsumer, ShareContext} from './../Contexts/ShareData';
import axios from 'axios';



export default class TopbarLogo extends Component{

	// logout(updateStatus){

	// 	cookie.remove('firstName');
	// 	updateStatus()
	// 	axios.get('/auth/logout')
	// 	.then(res=>{updateStatus()})
	// 	.catch(err=>console.log(err))

	// }

	render(){

		console.log("topbar rendering")
		return([
  
          	<nav style={{background: '#ededed'}}>
				  <div className="row" style={{lineHeight: '60px'}}>
				    <div className="col-sm-4 mr-auto"><a style={{color: 'black'}} id="logo" ><h2 style={{lineHeight: '60px', paddingLeft: '40px', fontFamily: 'Monotype Corsiva'}}>Flash Shop</h2></a></div>
				    <div className="col-sm-6 col-md-4 ml-auto">
				      <ShareDataConsumer>
				      {({isLogined, cartAmount, firstName, updateStatus, logout})=>{
				       return <div>

				      
				      
				        {!isLogined &&
				        <Link to="/login"><a style={{marginRight: '40px', display: 'inline-block', 'cursor':'pointer', 'textDecoration':'none'}}>
				          Đăng nhập
				        </a> 
				        </Link>
				        }

				        {isLogined &&

				        <React.Fragment>

				         <Link to="/cart/123456">
				        <a id="gocart" style={{marginLeft: '20px', display: 'inline-block'}}><span><img style={{width: '25px', marginLeft: '10px'}} src="/img/giohang.jpg" /></span>
				          <span className="badge badge-pill badge-warning" style={{width: '25px', marginLeft: '2px'}}>{cartAmount>0 && cartAmount}</span>
				        </a>
				       </Link>

				        <div className="dropdown" style={{display: 'inline'}}>
				          <a className="dropdown-toggle" data-toggle="dropdown" style={{marginLeft: '40px', display: 'inline-block', cursor: 'pointer', color: '#007bff'}}>
				            chào {firstName}
				          </a>    
				          <div className="dropdown-menu" style={{background: '#ededed'}}>
				           <Link to="/user/profile" style={{'textDecoration':'none'}}>
				             <a className="dropdown-item"  style={{color: '#007bff'}}>Thông tin tài khoản</a>
				           </Link>

				           <Link to="/user/order" style={{'textDecoration':'none'}}>
				             <a className="dropdown-item"  style={{color: '#007bff'}}>Đơn hàng</a>
				           </Link>

				          </div>
				        </div>

				         <a onClick={()=> {logout();}} style={{marginLeft: '40px', 'cursor':'pointer', display: 'inline-block'}}><i class="fas fa-sign-out-alt"></i>Đăng xuất</a>

				         </React.Fragment>
				    	}

				  	    
				  	    
				      </div>
				      }}
				      </ShareDataConsumer>
				    </div>
				  </div>
				</nav>,

				<div class="wrap-box" style={{padding: '2px', 'background-image': `url('/icon/strip.png')`}}></div>
				]

          
		)
	}
}