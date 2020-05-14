import React from 'react';
import './App.css';
import containerStyle from './assets/css/container.module.css'
import Left from './components/sideLeft'
import Right from './components/sideRight'

function App() {
  return (
    <div className="App">
      <section className={containerStyle.sideLeft}>
      <Left />
      </section>
      <section className={containerStyle.sideRight}>
        <Right />
      </section>
    </div>
  );
}

export default App;
