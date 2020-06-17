import React, {Component} from 'react';
import axios from 'axios'
import './Cart.css'
import {ShareDataProvider, ShareDataConsumer, ShareContext} from './../../Contexts/ShareData'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default props => ( <ShareDataConsumer>
        {({updateCart}) => {
           return <Cart {...props}  updateCart={updateCart} />
        }}
      </ShareDataConsumer>
)

 class Cart extends Component {
	constructor(props){
		super(props);
		this.userId= this.props.match.params.userId;
		this.state={
			list: []
		}
	}


	componentDidMount(){
		 axios.get("/cart").then(res => {
		 	console.log(res.data)
		      this.setState({
		        list: res.data
		      });
	    });
	}

	updateAmount(data){
           return axios.post("/cart/updateAmount",data)
	}

    

	handleChange(index){
			return (e)=>{
				let list= this.state.list;
				list[index].amount=e.target.valueAsNumber;


				this.updateAmount(list[index])
				.then((res)=>{
					let data= res.data;
					this.setState({
					list: list
					})
					this.props.updateCart()
					
				})
				.catch((e)=>toast.error('update số lượng thất bại'))


				
			}
	}


	render(){

		var {list} = this.state;
		var totalMoney=0;



		return (

			 <div className="cart">
			 <ToastContainer />
			
			   <h1>Đây là giỏ hàng của user  {this?.userId}</h1>
			   <table class="table">
			   	<thead>
			   		<tr>
			   			<th>Tên</th>
			   			<th>Giá</th>
			   			<th>Số lượng</th>
			   			<th>Tổng</th>
			   		</tr>
			   	</thead>
			   	<tbody>

			   	{list.map((element, index)=>{

			   		let product=element.product

			   		totalMoney+= product.price*element.amount;
			   		return(<tr>
			   			<td>
			   				<div className="cart-product-image">
			   					<img  src={'/'+product.imgUrl} />
			   					<p className="cart-product-name">{product.name}</p>
			   				</div>


			   			</td>
			   			<td>
			   					<div  className="cart-flex">
			   					<p style={{'display':'flex'}}>{product.price}</p>
			   					</div>
			   			</td>
			   			<td><input type="number" className="cart-amount" min={1}  value={element.amount} onChange={this.handleChange(index)}  /></td>
			   			<td>{product.price*element.amount}</td> 
			   		</tr>)

			   	})}

			   		<tr>
			   			<th colspan="3">Tổng tiền</th>
			   			
			   			<th>{totalMoney}</th>
			   		</tr>
			   		
			   	</tbody>

			   </table>
			 </div>

			)
	}
}