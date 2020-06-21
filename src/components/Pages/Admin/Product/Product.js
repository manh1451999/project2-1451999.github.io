import React, { Component } from 'react'
import './Product.css'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CKEditor from "ckeditor4-react";
import {
    Card, CardHeader, CardBody,
    FormGroup, Label, Input,
    Form, Row, Col
} from 'reactstrap';


export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            categories: [],
            editProduct: null,
            newProduct: null,
            file: null,
            form: null,
        };


    }



    converFormData(data){
    	let formData = new FormData()
		  Object.keys(data).forEach((key) => {
		    formData.append(key, data[key]);
		    console.log(key+"="+data[key])

		  })

		  return formData
    }

    componentDidMount() {
        axios.get("/product").then(res => {
            this.setState({
                products: res.data
            });

        console.table(this.state.products)

        });


        axios.get("/category").then(res => {
            this.setState({
                categories: res.data
            });
        console.table(this.state.categories)


        });



    }

    addProduct(){
    	let data= this.converFormData(this.state.newProduct);
		axios.post("/product", data).then(res => {
		      let products=this.state.products;
		      products.push(res.data)
		      this.setState({
		      	products: products
		      })
	    });
	}

	deleteProduct(id, index){

		axios.delete("/product/"+id).then(res => {
		      let products=this.state.products;
		      products.splice(index,1)
		      this.setState({
		      	products: products
		      })
	    });
	}

	editProduct(){
		var id= this.state.editProduct._id
		let data= this.converFormData(this.state.editProduct);
		axios.patch("/product/"+ id, data).then(res => {
		      let products=this.state.products;
		      let index;
		      products.forEach((e,index1)=>{
		      	if(e._id==id) index=index1
		      })
		      products.splice(index,1, res.data)
		      this.setState({
		      	products: products
		      })
	    });
	}


    preEdit(e, index){
    	this.setState({
    		editProduct: this.state.products[index]
    	});
    }

    preAdd(){
    	this.setState({
    		newProduct: null
    	})
    }

    handleEdit(e){
    	let {name}= e.target;
    	let value =  e.target.files? e.target.files[0] : e.target.value
    	let newEdit= {...this.state.editProduct};
    	newEdit[name]= value

    	this.setState({
    		editProduct: newEdit
    	});
    	console.table(newEdit)

    }



   
    handleDescription(e){
    	let editProduct= {...this.state.editProduct};
    	editProduct.description=e.editor.getData();

	    this.setState({editProduct: editProduct});
	    

    }



    handleNew(e){
    	let {name}= e.target;
    	let value =  e.target.files? e.target.files[0] : e.target.value
    	let add= {...this.state.newProduct};
    	add[name]= value

    	this.setState({
    		newProduct: add
    	});
	    // let cate= this.state.categories.filter( e=> e._id==value)
	    // console.log(cate[0].name)
    }

    handleAddDescription(e){
	let add= {...this.state.newProduct};
	add.description=e.editor.getData();

    this.setState({newProduct: add});

    }


    handleEditImg(e){
		let {name}= e.target;
		let value= e.target.files[0]
    	let add= {...this.state.newProduct};
    	add[name]= value;

    	console.log(value||e.target.value)

    	// this.setState({
    	// 	newProduct: add
    	// });
    }


    render() {

            const { products } = this.state
            const { categories } = this.state
            return (

                 <div class="product-admin">
				  <h2>Product</h2>
				   <br/>
				<button type="button" class="btn btn-primary" data-toggle="modal" 
				onClick={this.preAdd.bind(this)} data-target="#addproduct"><i class="fas fa-plus"></i>&ensp;Add Product</button>
						
				  <div className="card">
				  <table class="table">
				    <thead>
				      <tr>
				        <th>ID</th>
				        <th>Name</th>
				        <th>Summary</th>
				        <th>Image</th>
				        <th>Price</th>
				        <th>Action</th>
				      </tr>
				    </thead>
				    <tbody>

				    {products.map((product, index)=>{
				    	
				    	return (<tr>
				        <td>{index}</td>
				        <td>{product.name}</td>
				        <td width={400}>{product.summary}</td>
				        <td>
				        	<img src={'/'+product.imgUrl} width={64} height={64} />
				        </td>
				        <td>{product.price}</td>
				        <td>
				        	<form class="form-group" >
                            <button type="button" class="btn btn-success"  data-toggle="modal" data-target="#editProduct"  
                            onClick={(e)=>this.preEdit(e, index)}><i class="far fa-edit"></i></button>
                            &ensp;
                            <button type="button" class="btn btn-danger" 
                            onClick={(e)=>this.deleteProduct(product._id, index)}><i class="far fa-trash-alt"></i></button>
                            </form>
				        </td>
				      </tr>
				      )

				    })}
				      
				    </tbody>
				  </table>
				</div>

				<div class="modal fade" id="editProduct">
			     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
			      <div class="modal-content">
			      
			        <div class="modal-header">
			          <h4 class="modal-title">Edit Product</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
			        
			        <div class="modal-body">
			         <form>

			             <TextField
				          id="name"
				          label="Name"
				          name="name"
				          variant="outlined"
				          fullWidth
				          value={this.state.editProduct?.name }
				 		  onChange={this.handleEdit.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />

				        <TextField
				          id="price"
				          label="Price"
				          name="price"
				          type="number"
				          variant="outlined"
				          fullWidth
				          value={this.state.editProduct?.price}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				        />

				        <TextField
				          id="summary"
				          label="Summary"
				          name="summary"
				          multiline
        				  rowsMax={4}
				          variant="outlined"
				          fullWidth
				          value={this.state.editProduct?.summary}
				 		  onChange={this.handleEdit.bind(this)}
				 		  margin="normal"
				        />


				       
                        {/*<button type="button" class="btn btn-primary" onClick={this.handleEdit.bind(this)}>uploadfile</button>*/}


				      <div class="form-group">
					      <label for="category">Category:</label>
					      <select class="form-control" id="category" name="category"
					       onChange={this.handleEdit.bind(this)}
					       value={this.state.editProduct?.category}
					      >
					        {categories.map((category, index)=> (<option value={category._id} >{category.name}</option>))}
				
					      </select>
					   </div>


				       <FormGroup>
                            <Label for="imgUrl">Chọn Ảnh</Label>
                            <Input  
                                onChange={this.handleEdit.bind(this)}
                                type="file" name="imgUrl"
                                placeholder="chọn ảnh"/>
                        </FormGroup>

				        
{/*
				        <br />
				        <label htmlFor="contained-button-file">
					        Image
				        </label>
				        <br />
				        
				        <input
				        accept="image/*"
				        id="contained-button-file"
				        type="file"
				     	 />*/}
				     	{/*<label htmlFor="contained-button-file">
					        <Button variant="contained" color="primary" component="span">
					          Image
					        </Button>
				        </label>*/}
				        <br />
				        <br />


				        <label htmlFor="contained-button-file">
				      		Description
				        <CKEditor   name="description" data={this.state.editProduct?.description|| null} onChange={this.handleDescription.bind(this)}/>
				     	</label>


		              

			        </form>


			        </div>

			        <div class="modal-footer">
			          <button type="button" class="btn btn-primary" onClick={this.editProduct.bind(this)} data-dismiss="modal"><i class="far fa-save"></i>&ensp;Save</button>
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			        </div>
			        
			      </div>
			    </div>
			    </div>





				<div class="modal fade" id="addproduct">
			     <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
			      <div class="modal-content">
			      
			        <div class="modal-header">
			          <h4 class="modal-title">Add Product</h4>
			          <button type="button" class="close" data-dismiss="modal">&times;</button>
			        </div>
			        
			        <div class="modal-body">
			         <form>

			             <TextField
				          id="name"
				          label="Name"
				          name="name"
				          variant="outlined"
				          fullWidth
				          value={this.state.newProduct?.name|| ""}
				 		  onChange={this.handleNew.bind(this)}
				 		  autoFocus
				 		  margin="normal"
				        />

				        <TextField
				          id="price"
				          label="Price"
				          name="price"
				          type="number"
				          variant="outlined"
				          fullWidth
				          value={this.state.newProduct?.price|| ""}
				 		  onChange={this.handleNew.bind(this)}
				 		  margin="normal"
				        />

				        <TextField
				          id="summary"
				          label="Summary"
				          name="summary"
				          multiline
        				  rowsMax={4}
				          variant="outlined"
				          fullWidth
				          value={this.state.newProduct?.summary|| ""}
				 		  onChange={this.handleNew.bind(this)}
				 		  margin="normal"
				        />

					      <div class="form-group">
					      <label for="category">Category:</label>
					      <select class="form-control" id="category" name="category"
					       onChange={this.handleNew.bind(this)}
					       value={this.state.newProduct?.category}
					      >
					        {categories.map((category, index)=> (<option value={category._id} >{category.name}</option>))}
				
					      </select>
					      </div>


				         <FormGroup>
                            <Label for="imgUrl">Chọn Ảnh</Label>
                            <Input  
                                onChange={this.handleNew.bind(this)}
                                type="file" name="imgUrl"
                                placeholder="chọn ảnh"/>
                        </FormGroup>


					    


				        <label htmlFor="contained-button-file">
				      		Description
				        <CKEditor  data={this.state.newProduct?.description|| ""}   name="description" onChange={this.handleAddDescription.bind(this)}/>
				     	</label>



		               

			        </form>


			        </div>

			        <div class="modal-footer">
			          <button type="button" class="btn btn-primary" onClick={this.addProduct.bind(this)} data-dismiss="modal">Add</button>
			          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
			        </div>
			        
			      </div>
			    </div>
			    </div>



				</div>
				

			)
	}
}