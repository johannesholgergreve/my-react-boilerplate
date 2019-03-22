import React, { Component } from 'react'
import TestComponent from '../components/TestComponent/index'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to My React Boilerplate App</h1>
                <TestComponent/>
            </div>
        )
    }
}

export default App