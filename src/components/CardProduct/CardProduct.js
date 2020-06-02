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
                   <a href={`product/${product.id}`}>
                   		<img  src={product.imageUrl} />
                   </a>
                 </div>
			  
				  <div className="card-body">
				    <h4 className="card-title " >
				    	<Link class="nav-link product-name" to={`product/${product.id}`}>
			        		{product.name}
			        	</Link>
				    </h4>
				    <p className="card-text">{product.description}</p>
				    {/*<a href="#" className="btn btn-primary">Add to cart</a>*/}
				    <span class="product-price">
		              1.000.000
		            </span>
				  </div>
				</div>

    		</div>
			)
	}
}