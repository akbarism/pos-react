import React from 'react';
import './App.css';
import containerStyle from './assets/css/container.module.css'
import Left from './components/sideLeft'
import Right from './components/sideRight'
import API from './axios/Api'

class App extends React.Component {
  constructor () {
    super ()
    this.state = {
      menu: []
    }
  }
componentDidMount () {
  this.getMenu()
  
}
getMenu () {
  API.get('menu/')
  .then((res) => {
      this.setState({
          menu: res.data.result
      })
  })
}

search (e) {
  API.get(`menu/?search=${e.target.value}`)
  .then((res) => {
    this.setState({
      menu: res.data.result
  })

  })
  
}

  render () {
    return (
      <div className="App">
        <section className={containerStyle.sideLeft}>
        <Left menu={this.state.menu} onSearch={this.search.bind(this)} />
        </section>
        <section className={containerStyle.sideRight}>
          <Right />
        </section>
      </div>
    );
  }
}

export default App;
