import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Product from './Components/Product/Product';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state.inventory = [
//       {
//         name: '',
//         price: '',
//         img_url: ''
//       }
//     ]
//   }
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Dashboard inventory/>
//         <Form />
//       </div>
//     );
//   }
// }
// export default App;


// function App() {
  class App extends React.Component {
    constructor() {
      super()
      this.state = {
        currentView: ''
      }
      }
    render(){
  return (
    <div className="App">
    <Header/>
     <Dashboard/>
     <Form/>
    

   
    </div>
    
  );
}}

export default App;
