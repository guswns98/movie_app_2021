import {Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    
    state = {
        count: 0
    }

    add = () => {
        this.setState(current => ({
            count: current.count +1
        }))
    }

    minus = () => {
        this.setState(current => ({
            count: current.count -1
        }))
    }

    render() {
        console.log('render')
        return (
            <div>
            <h1>The number is: {this.state.count} </h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App