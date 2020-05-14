import React, { Component } from 'react'
import styless from '../assets/css/sideRight.module.css'
import none from '../assets/img/food-and-restaurant.png'
import cofee from '../assets/img/coffe-late.jpg'

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
                <div className={styless.exist}>
                    <div className={styless.listFood}>
                        <section className={styless.selectedFood}>
                            <img src={cofee} className={styless.thumb}/>
                            <article className={styless.midle}>
                                <section className={styless.foodName}>
                                    <h5>cofee</h5>
                                </section>
                                <section className={styless.counter}>
                                    <button className={styless.increment}>-</button>
                                    <input type="text" value="1" className={styless.numb}/>
                                    <button className={styless.increment}>+</button>
                                </section>
                            </article>
                            <article className={styless.price}>
                            Rp. 5.000
                            </article>    
                        </section>
                    </div>
                    <footer className={styless.heroBtn}>
                        <section className={styless.sumTotal}>
                            <h4>Total</h4>
                            <h4>Rp. 5.000*</h4>
                        </section>
                        <section className={styless.ppn}>
                            <p>Belum termasuk ppn</p>
                        </section>
                        <button className={styless.btnA}>Checkout</button>
                        <button className={styless.btnB}>Cancel</button>
                    </footer>
                </div>
                </div>
            </div>
        )
    }
}

export default sideRight