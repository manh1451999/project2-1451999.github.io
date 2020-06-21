import React, {Component} from 'react';
import { Redirect, Link } from "react-router-dom";
import './Login.css'

import validator from 'validator';
import validation from './../../Login/validation'

import axios from 'axios';
import cookie from 'react-cookies'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {ShareDataConsumer} from './../../../Contexts/ShareData'

export default props => ( <ShareDataConsumer>
        {({isLogined, updateCart, firstName, updateStatus}) => {
           return <Signup {...props} updateStatus={updateStatus} updateCart={updateCart} />
        }}
      </ShareDataConsumer>
)

class Signup extends Component {
	constructor(props){
		super(props);
		this.state={
			email:"",
			password:"",
			err:{
				email:'',
				password:''
			},
			
			isUser: false
		}
		this.handleInput= this.handleInput.bind(this);
		// this.validateByName= this.validateByName.bind(this);
		console.log(typeof(cookie.load('isAdmin')))

	}




	handleInput(e){
		const{name, value}= e.target;
		this.setState({[name]:value})
	}


	// validateByName(name, fun){
	// 	 let err= fun(this.state[name]);
	// 	 let errNew= this.state.err;
	// 	 errNew[name]= err

	// 	this.setState({
	// 		err:errNew
	// })
	// }

	Submit= async (e)=>{

		e.preventDefault();
		const {email, password} = this.state;

		let errNew= this.state.err;
		Object.keys(errNew).forEach(key=>{
			errNew[key]= validation[key](this.state[key])
		});

		this.setState({
			err:errNew
		})

		for(let key in errNew){
			if(errNew[key]!=null && errNew[key]!="" ) {
				console.log('đã có lỗi'+ errNew[key]);
				return
			}

		}

		// console.log('không có lỗi')

		let user={
	      		 email: this.state.email,
	       		 password: this.state.password
	      	}

		axios.post('/auth/login/admin', {user: user})
		.then((res)=>{
			this.props.updateStatus();
			this.props.updateCart()
			this.setState({
				isUser:true
			});


		})
	    .catch((err)=>toast.error('đăng nhập thất bại '+ err))
	}



	render(){

		if(cookie.load('isAdmin')=="true" || this.state.isUser) return <Redirect to="/admin" />;

		return (
			<div  >
			 <ToastContainer />
			<div style={{'marginBottom':'5%'}}></div>
			 <div className="login col-sm-4" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', border: '1px black solid', borderRadius: '30px', padding: '20px'}}>
			        <h1 className="text-center">Login</h1>
			        <br />

			        <form >
			          
			          <div className="form-group">
			            <label htmlFor="email" className="col-sm form-control-label">Email</label>
			            <div className="col-sm">
			              <input type="email" className="form-control" name="email" id="email" value={this.state.email} onChange={this.handleInput} />
			            </div>
			            <p className="form-text  text-danger login-err" id="invalid-email">{this.state.err?.email}</p>
			          </div>
			         
			          <div className="form-group">
			            <label htmlFor="password" className="col-sm form-control-label">Password</label>
			            <div className="col-sm">
			              <input type="password" className="form-control" name="password" id="password"  value={this.state.password} onChange={this.handleInput}/>
			            </div>
			            <p  className="form-text  text-danger login-err " id="invalid-password">{this.state.err?.password} </p>
			          </div>

			          <br />
			          
			          <div className="form-group">
			            <div className="col-sm-offset-2 col-sm">
			              <button type="submit" id="submit" className="btn btn-primary" onClick={this.Submit}>Login</button>
			            </div>
			          </div>
			          <p style={{fontSize: 'small', paddingLeft: '15px'}} className="form-text  text-success" id="valid" />

			        </form>
			         <script type="text/javascript" src="validation.js" ></script>
			      </div>
			     </div>
		)
	}
}
