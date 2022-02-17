import React, { Component } from 'react';

class Sns extends Component {
    constructor(props){
      super(props)      // props 상속
      this.state = {
        
      }
    }

    // HTML 템플릿
    render() {
      const { name } = this.props
      const { age } = this.props
      const { city } = this.props
      return (
          <>
                <h3>name: {name}</h3>
                <h3>age: {age}</h3>
                <h3>city: {city}</h3>
                <p>-------------------------</p>
          </>
      )
    }
  }
  
  export default Sns;