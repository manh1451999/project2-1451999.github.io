import React, {Component} from 'react'
import './CardProduct.css'
import {Link} from 'react-router-dom'


export default class CardProduct extends Component {
	constructor(props){
		super(props);
		


	}

	render(){
	  const {product}= this.props;
	  		return (
			<div className="card-product col-md-4 col-sm-6" style={{'marginTop':'30px'}}>
    			<div className="card" >

    			 <div class="product-img">
                   <a href={`product/${product._id}`}>
                   		<img  src={"http://localhost:1405/"+product.imgUrl} />
                   </a>
                 </div>
			  
				  <div className="card-body">
				    <h4 className="card-title " >
				    	<Link class="nav-link product-name" to={`product/${product._id}`}>
			        		{product.name}
			        	</Link>
				    </h4>
				    <p className="card-text">{product.summary}</p>
				    {/*<a href="#" className="btn btn-primary">Add to cart</a>*/}
				    <span class="product-price">
		              {product.price}
		            </span>
				  </div>
				</div>

    		</div>
			)
	}
}