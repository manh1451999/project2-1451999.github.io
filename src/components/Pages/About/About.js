import React, {Component} from 'react';
import './About.css'



export default class About extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
		<div class="about">
			<div class="banner" style={{'background-image': `url('img/about-us/5.jpg')`}}>
							<h1 style={{color: 'white', fontSize: '50px', 'text-align': 'center'}}>GIỚI THIỆU VỀ FLASH SHOP</h1>
			 </div>
			<div class="container">
				<div class="row">
					<div class="col">
						
						<h1>1. Giới thiệu chung</h1>

						<p><strong>Của hàng FLASH SHOP</strong> là một trong những của hàng linh kiện máy tính uy tín nhất tại hà nội</p>
						<p>Với tầm nhìn dài hạn, FLASH SHOP tập trung đầu tư vào lĩnh vực Công nghệ thông tin. Trên tinh thần phát triển bền vững và chuyên nghiệp, FLASH SHOP được cơ cấu với các sản phẩm kinh doanh chính gồm:
						</p>

						<ul>
							<li>Máy tính văn phòng</li>
							<li>Máy tính chơi Game</li>
							<li>Linh kiện máy tính</li>
							<li>Monitor – Màn hình</li>
							<li>Thiết bị Lưu trữ</li>
							<li>Phụ kiện các loại</li>
						</ul>
						<br />

						<h1>2. Giá trị cốt lõi</h1>

						<p>Văn hóa FLASH SHOP được thể hiện qua bốn giá trị cốt lõi: <strong style={{'color':'#000080' }}> TẬN TÂM – TRÁCH NHIỆM – SÁNG TẠO – KHÁC BIỆT</strong></p>
						<br/>

						<h2>
					    <img src="img/about-us/1.jpg" />
						TẬN TÂM</h2>
						<p>“Vượt trên sự mong đợi”</p>

						<p>FLASH SHOP đặt tận tâm là nền tảng của phục vụ, lấy khách hàng làm trung tâm, mang đến những giá trị đích thực tới khách hàng và đối tác.
					    </p>
			             <br/>
					   
					    <h2>
					    <img src="img/about-us/2.jpg"/>
						TRÁCH NHIỆM</h2>
						<p>“Chúng ta luôn cố gắng”</p>
			             
						<p>FLASH SHOP đặt chữ TÍN lên hàng đầu, luôn thể hiện tinh thần trách nhiệm cao cùng phương châm “Làm hết việc chứ không làm hết giờ”.
					    </p>
					    <br/>



					    <h2>
					    <img src="img/about-us/3.jpg"/>
						SÁNG TẠO</h2>
						<p>“Không gì là không thể”</p>

						<p>FLASH SHOP coi sáng tạo là đòn bẩy để phát triển, luôn đề cao các sáng kiến để hoàn thiện, hiệu quả hơn, nâng tầm giá trị.
					    </p>
					    <br/>


					    <h2>
					    <img src="img/about-us/4.jpg" />
						KHÁC BIỆT</h2>
						<p>“Dám nghĩ – Dám làm”</p>

						<p>FLASH SHOP đặt sự khác biệt là chủ trương để xây dựng công ty thành một doanh nghiệp dẫn đầu.
					    </p>
					    <br/>

					</div>
				</div>
			</div>
		  </div>


		)
	}
}