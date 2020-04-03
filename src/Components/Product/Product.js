import React, { Component } from 'react'
import axios from 'axios';

 class Product extends Component {
    render() {
        return (
            <div>
                <h1>Product</h1>
            </div>
        )
    }
}

export default Product




// import React, { Component } from 'react';
// import axios from 'axios';


//  class Product extends Component {
//      constructor(){
//          super()
//          this.state = {
//              editStatus:false,
//              name:'', 
//              price: '' , 
//              img:''
//          }  
//      }
//      changeEditStatus = () => {
//          this.setState({editStatus:!this.state.editStatus})
//      }
//      handleChange = e => {
//          this.setState({[e.target.name]:e.target.value})
//      }
//      updateProducts = () => {
//          const {name,price,img} = this.state
//          axios.put(`/api/shelfie/${this.props.val.id}`,{name, price, img})
//          .then(response => {
//              console.log(response)
//              this.setState({editStatus: !this.state.editStatus})
//             this.props.updateAllProducts(response.data)
//          })
//          .catch(error => {
//              console.log(error)
//          })
//      }

//      deleteProducts = () => {
//         console.log(this.props.val.id)
//          axios.delete(`/api/shelfie/${this.props.val.id}`)
//          .then(response => {
//              console.log(response)
//              this.props.updateAllProducts(response.data)
//          })
//          .catch(error => {
//              console.log(error)
//          })
//      }

   

//     render() {
//         // console.log(this.props.value)
//         console.log(this.state)
//         return (
//             <div>
//                 {/* <img className= 'adoptable' src={this.props.val.img}alt="img"/>
//                 <h2>{this.props.val.name}</h2>
//                 <p>{this.props.val.breed}</p>
//                 <p class = 'newAdopt'>{this.props.val.info}</p>
//                 <button onClick={this.changeEditStatus}>Edit</button>
                
//                 {
//                     this.state.editStatus === true
//                     ?
//                     <div>
//                         <input type='text' placeholder='Image' name='img' onChange={this.handleChange} />
//                         <input type='text' placeholder='Name' name='name' onChange={this.handleChange}/>
//                         <input type='text' placeholder='Breed' name='breed' onChange={this.handleChange}/>
//                         <input type='text' placeholder='Info' name='info' onChange={this.handleChange}/>
//                         <button onClick = {this.updateproducts}>Update</button>
//                     </div>
//                     :
//                     null
                    

//                 }
//                 <button onClick = {this.deleteProducts}>Delete</button> */}
//             </div>
//         )
//     }
// }

// export default Product

