import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Login.css'




export default class Signup extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (

			<div className="bglogin">
			<div style={{'marginBottom':'5%'}}></div>
			 <div className="signup col-sm-6" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', border: '1px black solid', borderRadius: '30px', padding: '20px'}}>
			        <h1 className="text-center">Sign Up</h1>
			        <br />
			        <form>
			          <div className="form-group">
			            <label htmlFor="userName" className="col-sm form-control-label">User Name</label>
			            <div className="col-sm">
			              <input type="text" className="form-control" name="userName" id="userName" placeholder />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-userName" />
			          </div>
			          <div className="form-group">
			            <label htmlFor="email" className="col-sm form-control-label">Email</label>
			            <div className="col-sm">
			              <input type="email" className="form-control" name="email" id="email" placeholder />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-email" />
			          </div>
			          <div className="form-group">
			            <label htmlFor="name" className="col-sm form-control-label">Full Name</label>
			            <div className="col-sm">
			              <input type="text" className="form-control" name="name" id="name" placeholder />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-name" />
			          </div>
			          {/* <div class="form-group">
							<label for="adress" class="col-sm form-control-label">Adress</label>
							<div class="col-sm">
								<input type="text" class="form-control" name="adress" id="adress" placeholder=""
								>
							</div>
							<p style="font-size: small;padding-left: 15px; margin-bottom: 5px" class="form-text  text-danger" id="invalid-adress"></p>
						</div> */}
			          <div className="form-group">
			            <label htmlFor="phone" className="col-sm form-control-label">Phone</label>
			            <div className="col-sm">
			              <input type="text" className="form-control" name="phone" id="phone" placeholder />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-phone" />
			          </div>
			          <div className="form-group">
			            <label htmlFor="password" className="col-sm form-control-label">Password</label>
			            <div className="col-sm">
			              <input type="password" className="form-control" name="password" id="password" />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-password" />
			          </div>
			          <div className="form-group">
			            <label htmlFor="confirmPassword" className="col-sm form-control-label">Confirm Password</label>
			            <div className="col-sm">
			              <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-confirmPassword" />
			          </div>
			          <div className="form-group">
			            <div className="col-sm-offset-2 col-sm">
			              <button type="submit" id="submit" className="btn btn-primary" onClick={"ok"}>Sign up</button>
			            </div>
			          </div>


			           <br/>
                         <Link style={{ paddingLeft: '15px'}} to="/login"> Already have an account?</Link>


			          <p style={{fontSize: 'small', paddingLeft: '15px'}} className="form-text  text-success" id="valid" />
			        </form>
			      </div>
			      </div>
		)
	}
}