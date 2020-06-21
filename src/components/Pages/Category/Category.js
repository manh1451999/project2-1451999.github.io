import React, {Component} from 'react';
import Slide from './../../Header/Slide';
import axios from 'axios'
import CardProduct from './../../CardProduct/CardProduct'
import CarouselTemplate from './../../CarouselTemplate/CarouselTemplate'
import CardProductMini from './../../CardProduct/CardProductMini'
import './Category.css'


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export default class Home extends Component {
	constructor(props){
		super(props);
		 this.state = {
	      products: []
	    };

	    this.name= this.props.match.params.name;
	    this.products= []

		console.log("constructor category")


	}

	updateProduct(){
		 axios.get("/product/category/"+this.name).then(res => {
		      this.setState({
		        products: res.data
		      });
	    });
	}

	 componentDidMount(){
		console.log("componentDidMount")
	  this.updateProduct()
	}


	render(){
		console.log("reder category")
		console.log(this.name)
		// const {products} = this.state;
		const {products} = this.state;
		return (

			<div>
				{products &&
				<div className="container">
					<h1 className="text text-center categoryName" >{this.name}</h1>
					 	
			        <div className="card-group">
			        	{products.map(product=>(<CardProduct product={product}  />)
			        		
			        	)}
			        </div>
				</div>
				}
			</div>
		)
	}
}