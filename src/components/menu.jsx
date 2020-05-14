import React, { Component } from 'react'
import styless from '../assets/css/foodMenu.module.css'
import kopi from '../assets/img/coffe-late.jpg'

class Menu extends Component {

    render () {
        return (
            <div className={styless.main}>
                <div className={styless.parent}>
                    <img src={kopi} alt="food"/>
                    <p>Cofee Latte</p>
                    <h5>Rp. 5.000</h5>
                </div>
                <div className={styless.parent}>
                    <img src={kopi} alt="food"/>
                    <p>Cofee Latte</p>
                    <h5>Rp. 5.000</h5>
                </div>
                <div className={styless.parent}>
                    <img src={kopi} alt="food"/>
                    <p>Cofee Latte</p>
                    <h5>Rp. 5.000</h5>
                </div>
                <div className={styless.parent}>
                    <img src={kopi} alt="food"/>
                    <p>Cofee Latte</p>
                    <h5>Rp. 5.000</h5>
                </div>
                <div className={styless.parent}>
                    <img src={kopi} alt="food"/>
                    <p>Cofee Latte</p>
                    <h5>Rp. 5.000</h5>
                </div>
                <div className={styless.parent}>
                    <img src={kopi} alt="food"/>
                    <p>Cofee Latte</p>
                    <h5>Rp. 5.000</h5>
                </div>
            </div>
        )
    }
}

export default Menu