import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios';

//  class Dashboard extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Dashboard</h1>
//             </div>
//         )
//     }
// }

class Dashboard extends Component {
    constructor(){
       super()
       this.state = {
           allProducts: [{
            name:'', 
            price:'', 
            img:''
   
           }]
       }
    }

    componentDidMount(){
        axios.get('/api/shelfie')
        .then(response => {
           this.setState({allProducts:response.data})
           })
           .catch(error => {
               console.log(error);
           })
        }
       updateAllProducts = newArr => {
           this.setState({allProducts:newArr})
       }

    render() {
       console.log(this.state.allProducts)
       let mappedProducts= this.state.allProducts.map((val,index) => {
           return(
               <Product val={val} updateAllProducts={this.updateAllProducts}/>
           )
       })
       return (
           <div>
               <h1>All Products</h1>
           
              {mappedProducts}
               
           </div>

       

       )
   }
   
}

export default Dashboard
