import React, {Component} from 'react';
import './ProductDetail.css'
import axios from 'axios'


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { ShareDataConsumer} from './../../Contexts/ShareData'


export default props => ( <ShareDataConsumer>
        {({updateCart}) => {
           return <ProductDetail {...props} updateCart={updateCart} />
        }}
      </ShareDataConsumer>)


 class ProductDetail extends Component {
	 constructor(props){
    	super(props);
        this.id= this.props.match.params.id;
        this.state={
        	product: null,
        	amount: 1
        }

 

    }

    componentDidMount(){
    	 axios.get(`/product/${this.id}`).then(res => {
    
		      this.setState({
		        product: res.data
		      });


	    });
    }

    handleInput(e){
    	this.setState({
    		amount: e.target.valueAsNumber
    	})
    }

    addToCart(){
       let productId=this.state.product._id;
       axios.post('/cart/addToCart', {amount: this.state.amount, productId: productId})
       	.then((res)=> this.props.updateCart())
       	.catch(err=>console.log(err))

    }

       
    


	render(){

		console.log(this.state)
		const {product}= this.state
		if(product?.imgUrl) product.listimgUrl=[product.imgUrl,product.imgUrl, product.imgUrl , product.imgUrl, product.imgUrl, product.imgUrl]
	 
		return (
            <div class="container proudctDetail">

            <ShareDataConsumer>
            {({updateCart})=>{this.updateCart=updateCart}}
            </ShareDataConsumer>

		            	
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
									 <div style={{'cursor': 'pointer'}}><img src={"http://localhost:1405/"+product?.imgUrl} /></div>
					                {(product?.listimgUrl ||[]).map((imgUrl,index)=>{ 
								  return <div style={{'cursor': 'pointer'}}><img src={"http://localhost:1405/"+product?.imgUrl} /></div>
								  })}
					        </Carousel>


							


								
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

								<div style={{"marginBottom":"30px"}}>
									 <span class="product-price">
						              	{product?.price}
						            </span>
					            </div>
								<p class="product-description">{product?.summary}</p>

								<input type="number" style={{width: '40px', marginRight: '10px'}} name="amonut" 
								value={this.state.amount}  onChange={this.handleInput.bind(this)} />
								<div class="action">
									{/*<button class="add-to-cart btn btn-default" type="button">add to cart</button>*/}
									
								      <button type="button" className="btn btn-warning" onClick={this.addToCart.bind(this)}
								       style={{width: '60%', padding: '15px', borderRadius: '10px', 'margin':'20px 0px'}}>
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
							<br/>
							<br/>
							<br/>
							<div dangerouslySetInnerHTML={{ __html: product?.description }} />
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