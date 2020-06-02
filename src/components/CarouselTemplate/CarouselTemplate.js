import React, {Component} from 'react';
import CardProductMini from './../CardProduct/CardProductMini';
import CardProduct from './../CardProduct/CardProduct';
import axios from 'axios';


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export default class CarouselTemplate extends Component {
	constructor(props){
		super(props);
		this.state={
			data:[]
		}
		console.log("CarouselTemplate constructor")


	}

	 componentDidMount(){
		 axios.get("https://29po7.sse.codesandbox.io/products").then(res => {
		      this.setState({
		        data: res.data
		      });
	    });
	}






	static defaultProps = {
		        autoplay: true,
		        autoplayTimeout: 3000
		    } 


	render(){
		console.log("CarouselTemplate render")

		// const { data } = this.props;
		const { data } = this.state;
		// const { data } = this.state;
		return (
			 <div className="card-group">
			 	  <OwlCarousel
			        className="owl-theme"
			        loop
			        autoplay={this.props.autoplay}
			        autoplayTimeout={this.props.autoplayTimeout}
			      >

			      {data.map(item=>(
			      	<div className="item">
			      		<CardProductMini  product={item}  />
			      	</div>)
					        		
					)}

			      </OwlCarousel>
	      	 </div>
	)
	}
}