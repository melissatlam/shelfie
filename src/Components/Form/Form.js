import React, { Component } from 'react'
import axios from 'axios';
import './Form.css'


class Form extends Component {
    constructor(){
        super()
        this.state= {
           name:'', 
           price:'', 
           img:''
           

        }
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleClick = () => {
     
        const {name,price,img} = this.state;
        axios.post('/api/shelfie', {
            name,
            price,
            img
        }).then(response => {
           console.log(response)
           this.setState({
               name:'',
               price:'',
               img:''
           })
        }).catch(error => {
           console.log(error)
       })
   }
   render() {
    // console.log(this.state)
    // const {name,price,img} = this.state
    return (
        <div className = 'main'>

            <img className ='pic' src = {this.state.img} alt=""/> <br/>
            <h3>Image URL</h3> <br/>
            <input  classname ='addToForm'type = "text" onChange={this.handleChange} name='img' /><br/>
            
            <h3>Product Name</h3> <br/>
            <input classname ='addToForm' type = "text" onChange={this.handleChange} name='name' /> <br/>
            
            <h3>Price</h3> <br/>
            <input classname ='addToForm'type = "text" onChange={this.handleChange} name='price' /><br/>

            
            
            {/* need to edit cancel button - not right i think */}
            {/* <button className = 'cancel' onClick={this.handleClick}>Cancel</button> */}
            <div class = 'flex'>
            <button className = 'button' onClick={this.handleClick}>Add to Inventory</button>
            <button className = 'button' onClick = {this.deleteProducts}>Cancel</button></div>
        </div>
    )
}
}


export default Form
