import React, { Component } from 'react'
import styless from '../assets/css/sideRight.module.css'
import none from '../assets/img/food-and-restaurant.png'

class sideRight extends Component {

    render () {
        return (
            <div className={styless.parent}>
                <nav className={styless.nav}>
                    <p>Cart</p>
                    <div className={styless.round}>0</div>
                </nav>
                <div className={styless.cart}>
                    <div className={styless.emptyCart}>
                        <img src={none}
                        alt="a cup"/>
                        <h5>Your cart is empty</h5>
                        <p>Please add some items from the menu </p>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default sideRight