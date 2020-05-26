import React, {Component} from 'react'



export default class Slide extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return ([

			  <div id="demo" class="carousel slide" data-ride="carousel">

			  <ul class="carousel-indicators">
			    <li data-target="#demo" data-slide-to="0" class="active"></li>
			    <li data-target="#demo" data-slide-to="1"></li>
			    <li data-target="#demo" data-slide-to="2"></li>
			  </ul>

			  <div class="carousel-inner">
			    <div class="carousel-item active">
			      <img src="img/1.jpg"  width="100%" />
			    </div>
			    <div class="carousel-item">
			      <img src="img/2.jpg"  width="100%" />
			    </div>
			    <div class="carousel-item">
			      <img src="img/3.jpg"  width="100%" />
			    </div>
			  </div>
			  
			  {/*<!-- Left and right controls -->*/}
			  <a class="carousel-control-prev" href="#demo" data-slide="prev">
			    <span class="carousel-control-prev-icon"></span>
			  </a>
			  <a class="carousel-control-next" href="#demo" data-slide="next">
			    <span class="carousel-control-next-icon"></span>
			  </a>
			</div>,


			<div className="chuchay">
			  <marquee>   Chào mừng các bạn đến với FLASH SHOP - thế giới linh kiện PC</marquee>
			</div>
			]
		)
	}
}