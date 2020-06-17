import React, {Component} from 'react';
import Slide from './../../Header/Slide';
import axios from 'axios'
import CardProduct from './../../CardProduct/CardProduct'
import CarouselTemplate from './../../CarouselTemplate/CarouselTemplate'
import CardProductMini from './../../CardProduct/CardProductMini'


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export default class Home extends Component {
	constructor(props){
		super(props);
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
		const { products } = this.state;
		return (
			<div>
				<div className="container">


					 <div >
					  	 <CarouselTemplate
					  	 data={products}
					  	  />


					 </div>


				    <div class="show-product">
					  <br/>
					  <ul class="nav nav-tabs" role="tablist">
					    <li class="nav-item">
					      <a class="nav-link active" data-toggle="tab" href="#home">Phổ Biến</a>
					    </li>
					    <li class="nav-item">
					      <a class="nav-link" data-toggle="tab" href="#menu1">Bán Chạy</a>
					    </li>
					    <li class="nav-item">
					      <a class="nav-link" data-toggle="tab" href="#menu2">Mới Nhất</a>
					    </li>
					  </ul>

					  <div class="tab-content">
					    <div id="home" class="container tab-pane active"><br/>
					        <div className="card-group">
					        	{products.map(product=>(<CardProduct product={product}  />)
					        		
					        	)}
					        </div>
					    </div>


					    <div id="menu1" class="container tab-pane "><br/>
					      <div className="card-group">
					        	{products.map(product=>(<CardProduct product={product}  />)
					        		
					        	)}
					        </div>
					    </div>


					    <div id="menu2" class="container tab-pane "><br/>
					      <div className="card-group">
					        	{products.map(product=>(<CardProduct product={product}  />)
					        		
					        	)}
					        </div>
					    </div>

					  </div>
					</div>
					
				</div>
			</div>
		)
	}
}