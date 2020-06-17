import React, { Component } from 'react';
import cookie from 'react-cookies';
import axios from 'axios'


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
		// setInterval(()=>{this.setState({isLogined: !this.state.isLogined}); console.log(this.state.isLogined)}, 1000)
	}

	componentDidMount(){
		this.updateCart();
		this.updateStatus()
	}

	updateCart(){
		  axios.get("/cart").then(res => {
		      this.setState({
		        cartItems: res.data
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


	render() {
		return (
			<ShareContext.Provider
			value={{
				isLogined: this.state.isLogined,
				cartAmount: this.state.cartAmount,
				firstName: this.state.firstName,
				cartItems:this.state.cartItems,
				updateStatus: this.updateStatus,
				updateCart:this.updateCart

			}}
			>
			{this.props.children}
			</ShareContext.Provider>
		);
	}
}
