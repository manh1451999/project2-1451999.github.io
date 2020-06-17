import React, {Component} from 'react'
import './Product.css'
import axios from 'axios'

export default class Product extends Component {
	constructor(props){
		super(props)
		this.state = {
		      products: []
		    };
			

	}

	 componentDidMount(){
		 axios.get("/product").then(res => {
		      this.setState({
		        products: res.data
		      });


	    });
	}


	render(){
		const {products}= this.state
		console.log("Product rendering")
		console.table(products)
		return (

				<div class="product-admin">
				  <h2>Product</h2>

				  <div className="card">
				  <table class="table">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Name</th>
				        <th>Description</th>
				        <th>Image</th>
				        <th>Price</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>

				    {products.map((product, index)=>{
				    	
				    	return (<tr>
				        <td>{index}</td>
				        <td>{product.name}</td>
				        <td>{product.description}</td>
				        <td>
				        	<img src={'/'+product.imgUrl} width={64} height={64} />
				        </td>
				        <td>{product.price}</td>
				        <td>
				        	<form class="form-group" >
                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#editCar"  onclick="Edit('<%- index %>')">Edit</button>
                            <button type="submit" class="btn btn-danger" onclick="">Delete</button>
                            </form>
				        </td>
				      </tr>
				      )

				    })}
				      
				    </tbody>
				  </table>
				</div>
				</div>
				

			)
	}
} 
