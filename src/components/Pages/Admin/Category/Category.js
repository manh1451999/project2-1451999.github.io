import React, {Component} from 'react'
import './Category.css'
import axios from 'axios'

export default class Category extends Component {
	constructor(props){
		super(props)
		this.state = {
		      categorys: []
		    };
			

	}

	 componentDidMount(){
		 // axios.get("https://29po7.sse.codesandbox.io/categorys").then(res => {
		 //      this.setState({
		 //        categorys: res.data
		 //      });
	  //   });

	  	this.setState({
	  		categorys:[
	  		{id:1, name: "ram"},
	  		{id:2, name: "ssd"},
	  		{id:3, name: "cpu"}
	  		]
	  	})
	}


	render(){

		const {categorys}= this.state
		console.log("category rendering")
		console.table(categorys)
		return (

				<div class="category-admin">

				
				  <h2>category</h2>

				  <table class="table">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Name</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>

				    {categorys.map((category, index)=>{
				    	
				    	return (<tr>
				        <td>{category.id}</td>
				        <td>{category.name}</td>

				        <td>
                            <button type="button" class="btn btn-success "  data-toggle="modal" data-target="#editCar"  onclick="Edit('<%- index %>')">Edit</button>
                            <button type="submit" class="btn btn-danger " onclick="">Delete</button>
				        </td>
				      </tr>
				      )

				    })}
				      
				    </tbody>
				  </table>
				</div>
				

			)
	}
} 
