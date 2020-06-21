import React, { Component } from 'react';
import cookie from 'react-cookies';
import axios from 'axios'
import { Redirect } from "react-router-dom";



export const ShareContext= React.createContext();
export const ShareDataConsumer= ShareContext.Consumer;
export class ShareDataProvider extends Component {

	constructor(props){
		super(props);
		this.state={
			isLogined: false,
			cartAmount:null,
			firstName: "mặc định",
			cartItems:[]
		}

		this.updateCart= this.updateCart.bind(this);
		this.updateStatus= this.updateStatus.bind(this);
		this.logout= this.logout.bind(this);
	}

	componentDidMount(){
		this.updateCart();
		this.updateStatus()
	}

	updateCart(){
		  axios.get("/cart").then(res => {
		      this.setState({
		        cartItems: res.data.list
		      });

		      let amount=0

		      this.state.cartItems.map((item)=>amount+=item.amount);
		      this.setState({
		      	cartAmount: amount
		      })
	    });
	}

	updateStatus(){
		if(cookie.load('firstName')) {
			this.setState({
				isLogined: true,
				firstName: cookie.load('firstName')

			})
		}
		else {
			this.setState({
				isLogined: false
			})
		}
	}

	logout(){

		cookie.remove('firstName');
		cookie.remove('isAdmin');
		this.updateStatus()
		axios.get('/auth/logout')
		.then((res)=>{this.updateStatus()})
		.catch(err=>console.log(err))

		 window.location.href="/"

		return <Redirect to="/" />


	}


	render() {
		return (
			<ShareContext.Provider
			value={{
				isLogined: this.state.isLogined,
				cartAmount: this.state.cartAmount,
				firstName: this.state.firstName,
				cartItems:this.state.cartItems,
				updateStatus: this.updateStatus,
				updateCart:this.updateCart,
				logout: this.logout

			}}
			>
			{this.props.children}
			</ShareContext.Provider>
		);
	}
}
