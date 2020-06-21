import React, { Component } from 'react'
import './Profile.css'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from 'react-toastify';
import {ShareDataConsumer} from './../../../Contexts/ShareData'

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
           user: null
        };


    }

    componentDidMount() {
        axios.get("/user/profile").then(res => {
            this.setState({
               user : res.data
            });

        console.table(this.state.user)

        });

    }

    updateProfile(updateStatus){

    	let {user}= this.state;
    	axios.patch("/user/profile", user)
	    	.then(res => {
	            this.setState({
	               user : res.data
	            });
	       		toast.success('update thông tin thành công', {position: "top-center"});
	       		updateStatus()
        	})
        	.catch((err)=> toast.error(err))
    }

    

     handleEdit(e){
    	let {name, value}= e.target;

    	let newEdit= {...this.state.user};
    	newEdit[name]= value

    	 this.setState({
    		user: newEdit
    	});

    	console.table(this.state.user)
    }






    render() {

            const {user} = this.state
            return (

                 <div class="user-admin">
				   <br/>
				   <ToastContainer />
				 <div className="card profile-card col-sm-8" >
				  <h2 style={{'margin':'20px'}}>Profile</h2>

				  {user &&
				   	<form style={{'margin':'20px'}}>

			             <TextField
				          id="firstName"
				          label="First Name"
				          name="firstName"
				          variant="outlined"
				          fullWidth
				          value={user?.firstName }
				 		  onChange={this.handleEdit.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />

				         <TextField
				          id="lastName"
				          label="Last Name"
				          name="lastName"
				          variant="outlined"
				          fullWidth
				          value={user?.lastName }
				 		  onChange={this.handleEdit.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />

				        

				        <TextField
				          id="email"
				          label="Email"
				          name="email"
				          variant="outlined"
				          fullWidth
				          value={user?.email}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				        />

				          <TextField
				          id="address"
				          label="Address"
				          name="address"
				          variant="outlined"
				          fullWidth
				          value={user?.address}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				          />

				          <TextField
				          id="phone"
				          label="Phone"
				          name="phone"
				          variant="outlined"
				          fullWidth
				          value={user?.phone}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				          />
				          <div className="text text-center">
				          <ShareDataConsumer>
				          {({isLogined, updateCart, firstName, updateStatus}) => {
					           return (
				          			<button type="button" class="btn btn-outline-primary" 
				          			onClick={(e)=>{this.updateProfile(updateStatus)}} ><i class="far fa-save"></i>&ensp;Update</button>
					           	)
					        }}
				          </ShareDataConsumer>
				          </div>

			        </form>
			    }
				</div>

			</div>
				

			)
	}
}