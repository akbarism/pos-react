import React, { Component } from 'react'
import styless from '../assets/css/sideLeft.module.css'
import burger from '../assets/img/berger.png'
import magnifer from '../assets/img/search.png'
import fork from '../assets/img/fork.png'
import clipboard from '../assets/img/clipboard.png'
import add from '../assets/img/add.png'
import Menu from '../components/menu'
import ModalAdd from './modalAdd'

class sideLeft extends Component {
    
    render () {
        return (
            <div className={styless.parent}>
                <nav className={styless.nav}>
                    <img src={burger}
                    alt="menu"
                    className={styless.mnu}
                    />
                    <h1>Food Items</h1>
                    <img src={magnifer} 
                    alt="search"
                    className={styless.src}
                    />
                </nav>
                <div className={styless.bottom}>
                    <section className={styless.sideBar}>
                        <img src={fork}
                        alt="fork"
                        className={styless.menuSide}
                        />
                        <img src={clipboard}
                        alt="clip"
                        className={styless.menuSide}
                        />
                        <img src={add}
                        alt="add"
                        className={styless.menuSide}
                        data-toggle="modal"
                        data-target="#exampleModal"
                        />
                        <ModalAdd />
                    </section>
                    <section className={styless.content}>
                        <Menu />
                    </section>
                </div>
            </div>
        )
    }
}

export default sideLeft