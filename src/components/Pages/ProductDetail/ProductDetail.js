import React, {Component} from 'react';
import './ProductDetail.css'
import axios from 'axios'


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default class ProductDetail extends Component {
	 constructor(props){
    	super(props);
        this.id= this.props.match.params.id;
        this.state={
        	product: null
        }

    }

    componentDidMount(){
    	 axios.get(`https://29po7.sse.codesandbox.io/products/${this.id}`).then(res => {
    	 	console.log(res.data)
		      this.setState({
		        product: res.data
		      });

	    });
    }

       
    


	render(){

		const {product}= this.state
		if(product?.imageUrl) product.listImageUrl=[product.imageUrl,product.imageUrl, product.imageUrl , product.imageUrl, product.imageUrl, product.imageUrl]
	 
	 	
		return (
            <div class="container proudctDetail">

		            	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
		    			<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
				<div class="card">
					<div class="container-fliud">
						<div class="wrapper row">
							<div class="preview col-md-6">



							
             				<Carousel
             				    transitionTime
							 	autoPlay={true}
					            interval={10000}
					            infiniteLoop={true}
					            emulateTouch={true}
					            showStatus={false}
					            transitionTime={350}
							 >


					                {(product?.listImageUrl ||[]).map((imageUrl,index)=>{ 

								  return <div style={{'cursor': 'pointer'}}><img src={imageUrl} /></div>

								  })}

					            </Carousel>


							

{/*
								
								<div class="preview-pic tab-content">
								  <div class="tab-pane active" id="pic-1"><img src={product?.imageUrl} /></div>
								  {(product?.listImageUrl ||[]).map((imageUrl,index)=>{ 

								  return <div class="tab-pane" id={`pic-${index+2}`}><img src={imageUrl} /></div>

								  })}
								  
								</div>

								

								<ul class="preview-thumbnail nav nav-tabs">
								
								{product?.listImageUrl &&
								   (<OwlCarousel
								   	id="1"
							        className="owl-theme"
							        loop
							        margin={10}
							        autoplay={false}
							        autoplayTimeout={5000}
							        items={4}
							        dotData={true}

							       ref={(el) => { this.slider = el; }}
							       
							      >

							       


							        <a data-target="#pic-1" data-toggle="tab"><img src={product?.imageUrl} /></a>


									  {(product?.listImageUrl ||[]).map((imageUrl,index)=>{

									  	return <a data-target={`#pic-${index+2}`} data-toggle="tab"><img src={imageUrl} /></a>
									  })}

							       
								  </OwlCarousel>)
								}

								


								</ul>*/}


								{/*<ul class="preview-thumbnail nav nav-tabs">

									  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={product?.imageUrl} /></a></li>

									  {(product?.listImageUrl ||[]).map((imageUrl,index)=>{

									  	return <li><a data-target={`#pic-${index+2}`} data-toggle="tab"><img src={imageUrl} /></a></li>

									  })}

								</ul>*/}
								
							</div>
							<div class="details col-md-6">
								<h3 class="product-title">{product?.name}</h3>
								<div class="rating">
									<div class="stars">
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star checked"></span>
										<span class="fa fa-star"></span>
										<span class="fa fa-star"></span>
									</div>
									<span class="review-no">41 reviews</span>
								</div>
								<p class="product-description">{product?.description}</p>
								<h4 class="price">current price: <span>$180</span></h4>
								{/*<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>*/}
								{/*<h5 class="sizes">sizes:
									<span class="size" data-toggle="tooltip" title="small">s</span>
									<span class="size" data-toggle="tooltip" title="medium">m</span>
									<span class="size" data-toggle="tooltip" title="large">l</span>
									<span class="size" data-toggle="tooltip" title="xtra large">xl</span>
								</h5>
								<h5 class="colors">colors:
									<span class="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
									<span class="color green"></span>
									<span class="color blue"></span>
								</h5>*/}
								<div class="action">
									{/*<button class="add-to-cart btn btn-default" type="button">add to cart</button>*/}
									
								      <button type="button" className="btn btn-warning" style={{width: '60%', padding: '15px', borderRadius: '10px'}}>
								        <span><img style={{width: '25px', marginRight: '10px'}} src="/img/giohang.jpg" /></span><strong>Thêm Vào Giỏ Hàng</strong>
								      </button>

									<span className="like" ><i class=" fa fa-heart"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div className="card desciption-review" id="accordion">
					<div className="row">
						<button className="btn btn-default border-right " data-toggle="collapse" data-target="#desciption"> <h3>Description</h3> </button>
						<button className="btn btn-default" data-toggle="collapse" data-target="#reviews">  <h3>Reviews</h3> </button>
					</div>
					<bt />

					<div className="row collapse show" id="desciption" data-parent="#accordion">
						<div>
							{product?.description}
							 <div dangerouslySetInnerHTML={{ __html: '<h1>Hiển thị nội dung cho code html</h1>' }} />
						</div>
					</div>

					<div className="row collapse" id="reviews" data-parent="#accordion">
						<h1>Đây là nhận xét</h1>
					</div>


				</div>
			</div>
	   )
	}
}