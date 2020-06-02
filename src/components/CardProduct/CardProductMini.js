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

    			 <div class="product-img" >
                   <a href={`product/${product.id}`}>
                   		<img  src={product.imageUrl} style={{'display':'inline'}}/>
                   </a>
                 </div>
			  
				  <div className="card-body">
				    <h4 className="card-title " >
				    	<Link class="nav-link product-name" to={`product/${product.id}`}>
			        		{product.name}
			        	</Link>
				    </h4>
				    {/*<p className="card-text">{product.description}</p>*/}
				    <span class="product-price">
		              1.000.000
		            </span>
				  </div>
				</div>

    		</div>
			)
	}
}