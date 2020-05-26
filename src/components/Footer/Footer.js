import React, {Component} from 'react';
import './Footer.css'


export default class Footer extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
			  <div id="end-container">
			    <div className="row">
			      <div className="col-sm-3">
			        <span className="icon">
			          <img src="img/4.png" alt="Mua hàng siêu tiết kiệm" />
			        </span>
			        <div className="content_row">
			          <h5 style={{ color: "green" }}>Mua hàng tiết kiệm </h5>
			          <span>
			            Các sản phẩm luôn được bán với giá ưu đã nhất cho khách hàng
			          </span>
			        </div>
			      </div>
			      <div className="col-sm-3">
			        <span className="icon">
			          <img src="img/5.png" alt="Chất lượng tuyệt đối 100%" />
			        </span>
			        <div className="content_row">
			          <h5 style={{ color: "green" }}>Chất lượng tuyệt đối 100%</h5>
			          <span>Cam kết sản phẩm chính hãng </span>
			        </div>
			      </div>
			      <div className="col-sm-3">
			        <span className="icon">
			          <img src="img/6.png" alt="Chất lượng tuyệt đối 100%" />
			        </span>
			        <div className="content_row">
			          <h5 style={{ color: "green" }}>Khuyến mãi cực lớn</h5>
			          <span>Được hưởng ưu đãi và các quà tặng hấp dẫn</span>
			        </div>
			      </div>
			      <div className="col-sm-3">
			        <span className="icon">
			          <img src="img/7.png" alt="Chất lượng tuyệt đối 100%" />
			        </span>
			        <div className="content_row">
			          <h5 style={{ color: "green" }}>Thanh toán dễ dàng</h5>
			          <span>
			            Giao hàng toàn quốc từ 1 -&gt; 4 ngày, chuyển khoản, nhận hàng thanh
			            toán.v.v.
			          </span>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/*end footer*/}
			  <div className="end-footer row">
			    <div className="menu-footer col-sm-5 ">
			      <h3>THE FLASH SHOP</h3>
			      <hr align="Left" size="8px" color="white" />
			      <p>Số điện thoại: 0967780420</p>
			      <p>Mail: manh1451999@gmail.com</p>
			      <p>Địa chỉ: số 20 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội</p>
			    </div>
			    <div className="bando col-sm-4 ml-auto ">
			      <iframe
			        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.730274944116!2d105.84797571455992!3d21.00344648601212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac74f21ad2c7%3A0x8e1a68269eb14672!2zMjAgTMOqIFRoYW5oIE5naOG7iywgQ-G6p3UgROG7gW4sIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1571885172443!5m2!1svi!2s"
			        height="270px"
			        width="90%"
			        frameBorder={0}
			        style={{ border: 0, marginLeft: 20 }}
			        allowFullScreen
			      />
			    </div>
			  </div>
			  <div className="end-footer" style={{ textAlign: "center" }}>
			    <p id="end" style={{ color: "white" }}>
			      Copyright © 2019 - The flash shop
			    </p>
			  </div>
			</div>



		)
	}
}