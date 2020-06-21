import React, {Component} from 'react';
import axios from 'axios'
import './Cart.css'
import {ShareDataProvider, ShareDataConsumer, ShareContext} from './../../Contexts/ShareData'
import {Link} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextField from '@material-ui/core/TextField';


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
			list: [],
			info: null

		}
	}


	componentDidMount(){
    	this.updateCart();
	}

	updateCart(){
		axios.get("/cart").then(res => {
    	  let {info, list}= res.data;
    	  info.userName= info.lastName+" "+info.firstName;
	      this.setState({
	        list: list,
	        info: info
	      });
		})
	}

	updateAmount(data){
           return axios.post("/cart/updateAmount",data)
	}

	thanhtoan(){
		 axios.post("/cart/pay",this.state.info)
		 .then(res=>{
		 	this.updateCart();
		 	this.props.updateCart();
		 	toast.success("Thanh toán thành công")
		 	
		 })
		 .catch((err)=>{
		 	toast.error(err)
		 })

	}


	deleteToCart(index){
		let data=this.state.list[index]
           return axios.post("/cart/deleteToCart",data)
           		 .then(res=>{
           		 	let list= this.state.list;
           		 	list.splice(index,1);
           		 	this.setState({
					list: list
					})
					this.props.updateCart()
           		 })
           		 .catch((e)=>toast.error('xoá sản phẩm thất bại'))
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

	handleChangeInfo(e){
		let {name, value}= e.target;
		let info={...this.state.info};
		info[name]= value;
		this.setState({info});
		console.table(this.state.info)
	}


	render(){

		var {list} = this.state;
		var totalMoney=0;



		return (

			 <div className="cart">
			 <ToastContainer />
			
			   <table class="table cangiua">
			   	<thead>
			   		<tr>
			   			<th>Tên</th>
			   			<th>Giá</th>
			   			<th>Số lượng</th>
			   			<th>Tổng</th>
			   			<th></th>
			   		</tr>
			   	</thead>
			   	<tbody>

			   	{list.map((element, index)=>{

			   		let product=element.product

			   		totalMoney+= product.price*element.amount;
			   		return(<tr>
			   			<td>
			   				<div className="cart-product-image">
			   				  <Link to={`/product/${product._id}`}>
			   					<img  src={'/'+product.imgUrl} />
			   				 </Link>
			   					<p className="cart-product-name">{product.name}</p>
			   				</div>


			   			</td>
			   			<td>
		   					<div  className="cart-flex cangiua">
		   					<p style={{'display':'flex'}}>{product.price}</p>
		   					</div>
			   			</td>
			   			<td><input type="number" className="cart-amount cangiua" min={1}  value={element.amount} onChange={this.handleChange(index)}  /></td>
			   			<td><div className="cangiua">{product.price*element.amount}</div></td> 
			   			<td><i className="fa fa-trash cangiua" 
			   			style={{'cursor':'pointer', 'text-align':'center'}} aria-hidden="true"
			   			onClick={(e)=>this.deleteToCart(index)}
			   			>
			   				</i>
			   			</td> 

			   		</tr>)

			   	})}
			   	</tbody>

			   	<thead>
			   		<tr>
			   			<th colspan="3">Tổng tiền</th>
			   			
			   			<th>{totalMoney}</th>
			   			{list.length>0
			   			 &&
			   			 <th>
			   				<button type="button" class="btn btn-primary" 
			   				data-toggle="modal" data-target="#thongtinthanhtoan">Đặt hàng</button>
			   			</th>
			   			}
			   		</tr>
			   	</thead>
			   </table>




			    <div class="modal fade" id="thongtinthanhtoan">
			     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
			      <div class="modal-content">
			      
			        <div class="modal-header">
			          <h4 class="modal-title">Thông tin liên hệ</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
			        
			        <div class="modal-body">
			         <form>

			             <TextField
				          id="userName"
				          label="Full Name"
				          name="userName"
				          variant="outlined"
				          fullWidth
				          value={this.state.info?.userName|| ""}
				 		  onChange={this.handleChangeInfo.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />

				        <TextField
				          id="address"
				          label="Address"
				          name="address"
				          variant="outlined"
				          fullWidth
				          value={this.state.info?.address|| ""}
				 		  onChange={this.handleChangeInfo.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />


				        <TextField
				          id="phone"
				          label="Phone"
				          name="phone"
				          variant="outlined"
				          fullWidth
				          value={this.state.info?.phone|| ""}
				 		  onChange={this.handleChangeInfo.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />

			        </form>
			        </div>
			        <div class="modal-footer">

             		  <button type="submit" id="submit" class="btn btn-primary"  data-dismiss="modal" 
             		    onClick={this.thanhtoan.bind(this)}>Xác nhận</button>
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			        </div>
			        
			      </div>
			    </div>
			    </div>












			 







			 </div>

			)
	}
}