import React, {Component} from 'react';
import  './Header.css'

export default class TopbarLogo extends Component{

	render(){
		return([
  
          	<nav style={{background: '#ededed'}}>
				  <div className="row" style={{lineHeight: '60px'}}>
				    <div className="col-sm-4 mr-auto"><a style={{color: 'black'}} id="logo" ><h2 style={{lineHeight: '60px', paddingLeft: '40px', fontFamily: 'Monotype Corsiva'}}>Flash Shop</h2></a></div>
				    <div className="col-sm-6 col-md-4 ml-auto">
				      <div>
				        <a onClick="" id="gocart" style={{marginLeft: '20px', display: 'inline-block'}}><span><img style={{width: '25px', marginLeft: '10px'}} src="/img/giohang.jpg" /></span>
				          <span className="badge badge-pill badge-warning" style={{width: '25px', marginLeft: '2px'}}>1</span>
				        </a>
				        <a href="/login" style={{marginLeft: '40px', display: 'inline-block'}}>
				          Đăng nhập
				        </a>    
				        <div className="dropdown" style={{display: 'inline'}}>
				          <a className="dropdown-toggle" data-toggle="dropdown" style={{marginLeft: '40px', display: 'inline-block', cursor: 'pointer', color: '#007bff'}}>
				            chào Mạnh
				          </a>    
				          <div className="dropdown-menu" style={{background: '#ededed'}}>
				            <a className="dropdown-item" routerlink="manage-user-for-customer/{{userId}}/edit" style={{color: '#007bff'}}>Thông tin tài khoản</a>
				            <a className="dropdown-item" routerlink="view-list-cart" style={{color: '#007bff'}}>Đơn hàng</a>
				          </div>
				        </div>
				        <a routerlink onClick="" style={{marginLeft: '40px', display: 'inline-block'}}>Đăng xuất</a>
				      </div>
				    </div>
				  </div>
				</nav>,

				<div class="wrap-box" style={{padding: '2px', 'background-image': `url('icon/strip.png')`}}></div>
				]

          
		)
	}
}