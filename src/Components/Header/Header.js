import React, { Component } from 'react'
import axios from 'axios';
import './Header.css'



 class Header extends Component {
    render() {
        return (
            <div>
               <h1 className = 'title' >Shelfie</h1>
            </div>
        )
    }
}

export default Header

