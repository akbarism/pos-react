import React, { Component } from 'react'
import '../assets/css/menu.css'
import thick from '../assets/img/thick.png'
// import API from '../axios/Api'


class Menu extends Component {
    // getMenu () {
    //     API.get('menu/')
    //     .then((res) => {
    //         this.setState({
    //             menu: res.data.result
    //         })
    //     })
    // }


    // componentDidMount () {
    //     this.getMenu ()
    // }

    clicked = () => {
        document.querySelector('.checked').classList.toggle('unchecked')

      }

    render () {
        return (
            <div className="main">
                {this.props.menu.map((menu ,i) =>
                <div className="parent" key={i} onClick={() => this.clicked()}>
                    <img src={menu.image} alt="food"/>
                    <div className="checked" key={i}>
                    <img src={thick}
                        className="thick"
                        alt="food"
                        />
                    </div>
                    <p>{menu.name}</p>
                    <h5>Rp. {menu.price}</h5>
                </div>
                )}
            </div>
        )
    }
}

export default Menu