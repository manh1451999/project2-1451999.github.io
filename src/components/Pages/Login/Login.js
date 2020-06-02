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
			 <div className="login col-sm-4" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '10px', border: '1px black solid', borderRadius: '30px', padding: '20px'}}>
			        <h1 className="text-center">Login</h1>
			        <br />
			        <form>
			          
			          <div className="form-group">
			            <label htmlFor="email" className="col-sm form-control-label">Email</label>
			            <div className="col-sm">
			              <input type="email" className="form-control" name="email" id="email" placeholder />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-email" />
			          </div>
			         
			          <div className="form-group">
			            <label htmlFor="password" className="col-sm form-control-label">Password</label>
			            <div className="col-sm">
			              <input type="password" className="form-control" name="password" id="password" />
			            </div>
			            <p style={{fontSize: 'small', paddingLeft: '15px', marginBottom: '5px'}} className="form-text  text-danger" id="invalid-password" />
			          </div>

			          <br />
			          
			          <div className="form-group">
			            <div className="col-sm-offset-2 col-sm">
			              <button type="submit" id="submit" className="btn btn-primary" onClick={"ok"}>Login</button>
			            </div>
			          </div>
			          <p style={{fontSize: 'small', paddingLeft: '15px'}} className="form-text  text-success" id="valid" />

	                    <p style={{ paddingLeft: '15px'}} >Don't have account?
	                    	<Link to="/sign-up"> Sign up here</Link>
	                    </p>
			        </form>
			         <script type="text/javascript" src="validation.js" ></script>
			      </div>
			     </div>
		)
	}
}