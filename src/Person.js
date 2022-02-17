import React, { Component } from 'react'

class Person extends Component {
  render() {
    const name = 'syleemomo'
    const age = 3
    
    return (
        // JSX 문법 사용함
    	<>
            <h3>{name}</h3>
            <h4>{age}</h4>
        </>
    )
  }
}

export default Person