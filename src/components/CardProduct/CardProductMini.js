import React, {Component} from 'react'
import './CardProduct.css'
import {Link} from 'react-router-dom'



export default class CardProductMini extends Component {
	constructor(props){
		super(props);

	}

	render(){
	  const {product}= this.props;
		return (
			<div className="card-product" style={{'marginTop':'30px'}}>
    			<div className="card" >

                 <Link class="nav-link product-name" to={`product/${product._id}`}>
	    			 <div class="product-img" >
	                   <a>
	                   		<img  src={"http://localhost:1405/"+product.imgUrl} style={{'display':'inline'}}/>
	                   </a>
	                 </div>
                </Link>
			  
				  <div className="card-body">
				    <h4 className="card-title " >
				    	<Link class="nav-link product-name" to={`product/${product._id}`}>
			        		{product.name}
			        	</Link>
				    </h4>
				    {/*<p className="card-text">{product.description}</p>*/}
				    <span class="product-price">
		            	{product.price}
		            </span>
				  </div>
				</div>

    		</div>
			)
	}
}