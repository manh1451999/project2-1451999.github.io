import React, { Component } from 'react'
import './User.css'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CKEditor from "ckeditor4-react";
import MenuItem from '@material-ui/core/MenuItem';
import { ToastContainer, toast } from 'react-toastify';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
           users: [],
            editUser: null
        };
    }

    componentDidMount() {
        axios.get("/user").then(res => {
            this.setState({
               users: res.data
            });

        console.table(this.state.users)

        });

    }

    editUser(){
    	var id= this.state.editUser._id
		axios.patch("/user/"+ id, this.state.editUser)
			.then(res => {
		      let users=this.state.users;
		      let index;
		      users.forEach((e,index1)=>{
		      	if(e._id==id) index=index1
		      })
		      users.splice(index,1, res.data)
		      this.setState({
		      	users: users
		      })

		      toast.success('update thông tin thành công');
	    	})
	    	.catch((err)=> toast.error(err))
	}

    preEdit(e, index){
    	this.setState({
    		editUser: this.state.users[index]
    	});
    }


    handleEdit(e){
    	let {name, value}= e.target;
    	console.log(value)

    	let newEdit= {...this.state.editUser};
    	newEdit[name]= value

    	this.setState({
    		editUser: newEdit
    	});
    }


        handleEditBlock(e){
    	let {name, value}= e.target;

    	value = (value=="true"|| value==true)
    	
    	this.setState({
    		editUser: {...this.state.editUser, isBlock: value}
    	});
    	console.table(this.state.editUser)
    }





    render() {

            const {users } = this.state
            return (

                  <div class="user-for-admin">
				   <ToastContainer />
				  <h2>User</h2>
				   <br/>

				  <div className="card">
				  <table class="table">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Name</th>
				        <th>Email</th>
				        <th>Phone</th>
				        <th>Address</th>
				      </tr>
				    </thead>
				    <tbody>

				    {users.map((user, index)=>{
				    	
				    	return (<tr>
				        <td>{index}</td>
				        <td>{user.lastName} {user.firstName}</td>
				        <td>{user.email}</td>
				        <td>{user.phone}</td>
				        <td>{user.address}</td>
				        <td>
				        	<form class="form-group" >
                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#editUser"  
                            onClick={(e)=>this.preEdit(e, index)}><i class="far fa-edit"></i></button>
                            &ensp;
                            <button type="submit" class="btn btn-danger" onclick=""><i class="far fa-trash-alt"></i></button>
                            </form>
				        </td>
				      </tr>
				      )

				    })}
				      
				    </tbody>
				  </table>
				</div>

				<div class="modal fade" id="editUser">
			     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
			      <div class="modal-content">
			      
			        <div class="modal-header">
			          <h4 class="modal-title">Edit User</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
			        
			        <div class="modal-body">
			         <form>

			             <TextField
				          id="firstName"
				          label="First Name"
				          name="firstName"
				          variant="outlined"
				          fullWidth
				          value={this.state.editUser?.firstName }
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
				          value={this.state.editUser?.lastName }
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
				          value={this.state.editUser?.email}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				        />

				          <TextField
				          id="address"
				          label="Address"
				          name="address"
				          variant="outlined"
				          fullWidth
				          value={this.state.editUser?.address}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				          />

				          <TextField
				          id="phone"
				          label="Phone"
				          name="phone"
				          variant="outlined"
				          fullWidth
				          value={this.state.editUser?.phone}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				          />


				         <div class="form-group">
					      <label for="isBlock">Block: </label>
					      <select class="form-control" id="isBlock"
					       onChange={this.handleEditBlock.bind(this)}
					       value={this.state.editUser?.isBlock} name="isBlock">
					        <option  value={true}>Yes</option>
					        <option value={false}>No</option>
					      </select>
					     </div>





			        </form>


			        </div>

			        <div class="modal-footer">
			          <button type="button" class="btn btn-primary"  data-dismiss="modal" onClick={this.editUser.bind(this)} >
			          <i class="far fa-save" ></i>&ensp;Save</button>
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			        </div>
			        
			      </div>
			    </div>
			    </div>





				</div>
				

			)
	}
}