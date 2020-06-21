import React, { Component } from 'react';
import './Search.css'
import CardProduct from './../../CardProduct/CardProduct'
import axios from 'axios'

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state={
			key:"",
			products:[]
		}

		this.key= this.props.match.params.key;

		this.handleInput= this.handleInput.bind(this)
		this.Search= this.Search.bind(this)
	}

	async componentDidMount(){
		if(this.key){
			await this.setState({
				key: this.key
			});
			this.Search()
		}
	}
	Search(){
		let {key}= this.state
		axios.get(`/product/search?key=${key}`)
			.then(res=>{
				this.setState({
					products: res.data
				})
			})
	}

	handleInput(e){

		let {value}= e.target;
		this.setState({
			key: value
		});
		this.Search()

	}

	render() {
		var {key,products}= this.state
		return (
			<div className="search">
				<div class="input-group mb-3 input-group-lg">
				  <input type="text" class="form-control" value={key} placeholder="Nhập từ khoá" onChange={this.handleInput}  aria-describedby="basic-addon2"/>
				  <div class="input-group-append">
				    <button class="btn btn-outline-success" onClick={this.Search} type="button">Search</button>
				  </div>
				</div>

				<div className="result-search">
					<legend>
						Kết quả tìm kiếm cho từ khoá <span style={{'color':'orange'}}>{key}</span> :
					</legend>

					<div>
					  <div className="card-group">
				        	{products.map(product=>(<CardProduct product={product}  />)
				        		
				        	)}
				       </div>
					</div>
				</div>
			</div>
		);
	}
}
