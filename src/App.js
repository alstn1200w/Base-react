import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    fruits: [
      {name: "딸기", price: "9000원"},
      {name: "수박", price: "17000원"},
      {name: "바나나", price: "4700원"}
    ]
  }
  render(){
    const { fruits } = this.state
    return (
      <>
        <h1>과일 가격표</h1>
        {fruits.map( (fruit, id) => {
          return (
            <div key={id}>
              <h3>{fruit.name}</h3>
              <h4>{fruit.price}</h4>
              <h4>----------------</h4>
            </div>
          )
        })}
      </>
    )
  }
  
}

export default App;