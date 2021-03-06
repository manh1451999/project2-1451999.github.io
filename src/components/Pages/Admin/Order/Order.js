import React, { Component } from 'react'
import './Order.css'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CKEditor from "ckeditor4-react";
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom'

import Moment from 'react-moment';
import 'moment-timezone';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
           orders: [],
           editOrder: null,
           detailOrder: null
        };


    }

    componentDidMount() {
        axios.get("/order").then(res => {
            this.setState({
               orders: res.data
            });

        console.table(this.state.orders)

        });

    }

    updateStatus(index, status){
    	let data={
    		_id:this.state.orders[index]._id,
    		status: status
    	}
    	  axios.put("/order/upadteStatus", data).then(res => {
           let orders=this.state.orders;
		      orders.splice(index,1, res.data)
		      this.setState({
		      	orders: orders
		      })

   		 })
   	}

   	async handleStatus(e, index){
   		let {value}= e.target;
   		confirmAlert({
			      title: 'Thay đổi trạng tái đơn hàng',
			      message: 'Bạn có chắc chắn muốn thay đổi',
			      buttons: [
			        {
			          label: 'Yes',
			          onClick: () => this.updateStatus(index, value)
			        },
			        {
			          label: 'No'
			        }
			      ]
			    });

   	}


    preDetail(e, index){
    	this.setState({
    		detailOrder: this.state.orders[index]
    	});
    }


    render() {

            const {orders, editOrder, detailOrder } = this.state;
            var totalMoney=0;
            return (

                    <div class="order-admin">
				  <h2>Order</h2>
				   <br/>

				  <div className="card">
				  <table class="table">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Name</th>
				        <th>Date</th>
				        <th>Phone</th>
				        <th>Address</th>
				        <th>Money</th>
				        <th>Status</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>

				    {orders.map((order, index)=>{

				    	let date= new Date(order.createAt);


				    	return (<tr>
				        <td>{index}</td>
				        <td>{order.userName} {order.firstName}</td>
				        <td>
					        <Moment format="YYYY-MM-DD HH:mm">
				                {order.createAt}
				            </Moment>
				        </td>
				        <td>{order.phone}</td>
				        <td>{order.address}</td>
				        <td>{order.totalMoney}</td>
				        <td>
				         <select class="select" class="form-control" value= {order.status} onChange={(e)=>this.handleStatus(e, index)} >
					          <option value={0}>Chờ lấy hàng</option>
					          <option value={1}>Đang giao</option>
					          <option value={2}>Giao thành công</option>
					          <option value={3}>Đã hủy</option>
				          </select>
				        </td>

				        <td>
				        	<form class="form-group" >
                            <button type="button" class="btn btn-info"  data-toggle="modal" data-target="#detailOrder"  
                            onClick={(e)=>this.preDetail(e, index)}><i class="fas fa-info-circle"></i> Detail</button>
                            </form>
				        </td>
				      </tr>
				      )

				    })}
				      
				    </tbody>
				  </table>
				</div>






			    <div class="modal fade" id="detailOrder">
			     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
			      <div class="modal-content">
			      
			        <div class="modal-header">
			          <h4 class="modal-title">Detail Order</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>

			        {detailOrder &&
			        <div class="modal-body">
			           <p>ID đơn hàng: {detailOrder._id}</p>
				       <p>Tên người nhận: {detailOrder.userName}</p>
				       <p>Địa chỉ: {detailOrder.address}</p>
				       <p>Số điện thoại: {detailOrder.phone}</p>
				        <br/>


				        <table class="table  table-inverse  table-hover">
				        	<thead>
				        		<tr>
				        			<th>STT</th>
				        			<th >Tên</th>
						   			<th>Giá</th>
						   			<th>Số lượng</th>
						   			<th>Thành tiền</th>
				        		</tr>
				        	</thead>
				        	<tbody>

				        	{detailOrder.listProduct.map((element, index)=>{
				        			let product=element.product

			   						totalMoney+= product.price*element.amount;

			   						return(<tr>
			   								<td>{index+1}</td>
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
								   			<td><p className=" cangiua" >{element.amount}</p></td>
								   			<td><div className="cangiua">{product.price*element.amount}</div></td> 
								   		</tr>)

				        		})
				        	}
				        		
				        	</tbody>

				        	<thead>
			                    <tr>
			                        <th colspan="2">Tổng tiền</th>
			                        <th colspan="2">Tổng tiền</th>
			                        <th colspan="1">{totalMoney}</th>
			                        
			                    </tr>
			                </thead>
				        </table>

			        </div>
			    	}
			        <div class="modal-footer">
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			        </div>
			      </div>
			    </div>
			    </div>









				</div>
				

			)
	}
}