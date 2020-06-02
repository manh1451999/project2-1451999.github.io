import React, {Component} from 'react';
import './Contact.css'



export default class Contact extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
		 <div class="contact-container">
		    <div class="tieu-de">
		      <div class="gach-ngang"></div>
		      <h2>CONTACT US</h2>
		     </div>
		    <div class="row">
				     
		      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.730274944116!2d105.84797571455992!3d21.00344648601212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac74f21ad2c7%3A0x8e1a68269eb14672!2zMjAgTMOqIFRoYW5oIE5naOG7iywgQ-G6p3UgROG7gW4sIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1571885172443!5m2!1svi!2s" width="100%" height="400px" frameBorder={0} style={{border: 0}} allowFullScreen />
		    </div>
		    <div class="row">
		      <div class="col-sm-7">
		        <div class="contact-from">
		          <div class="tieu-de">
		            <div class= "gach-ngang"></div>
		            <h4>GET IN TOUCH</h4>
		          </div>  
		         
		          <form action="#" class="row">
		            <div class="form-group col-md-6">
		              <input type="text" name="name" class="form-control" placeholder="Name" />
		            </div>
		              <div class="form-group col-md-6">
		              <input type="email" name="email" class="form-control"  placeholder="Email"/>
		              </div>  
		              <div class="form-group col-md-12">
		                  <input type="text" name="subject" class="form-control" placeholder="Subject"/>
		              </div>        
		              <div class="form-group col-md-12">
		                  <textarea name="message" id="message" class="form-control" rows="10" placeholder="Your Message Here"></textarea>
		              </div>
		              <div class="form-group col-md-12">
		                  <input type="submit" name="submit" class="btn btn-primary pull-right " value="Submit"/>
		              </div>
		          </form>
		        </div>
		      </div>
		      
		      <div class="col-sm-5">
		        <div class="contact-from">
		          <div class="tieu-de">
		            <div class= "gach-ngang"></div>
		            <h4>CONTACT INFO</h4>
		          </div>  
		           <address style={{textAlign: 'left', paddingLeft: '50px'}}>
		            <h5>THE FLASH SHOP</h5>
		            <p>20 Lê Thanh Nghị-Hai Bà Trưng-Hà Nội</p>
		            <p>Mobile: 0967780420</p>
		            <p>Fax: 123456789</p>
		            <p>Email: manh1451999@gmail.com</p>
		          </address>

		          <div class="tieu-de">
		            <div class= "gach-ngang"></div>
		            <h4>SOCIAL NETWORKING</h4>
		          </div> 
		          <div class="list-icon">
		            <ul>
		              <li>
		                <a href=""><img src="icon/1.jpg"/></a>
		              </li>
		              <li>
		                <a href=""><img src="icon/2.jpg"/></a>
		              </li>
		              <li>
		                <a href=""><img src="icon/3.jpg"/></a>
		              </li>

		            </ul>
		          </div> 
		        </div>
		      </div>

		    </div>
		  </div>



		)
	}
}