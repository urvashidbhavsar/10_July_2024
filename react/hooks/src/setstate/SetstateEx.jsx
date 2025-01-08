import React from 'react'

class SetstateEx extends React.Component {
    constructor() {
        super()
        this.state = { name: "Sujal" }
    }
    handleEvent = () => {
        this.setState({ name: "Priyank" })
    }
    render() {
        return (
            <>
                <button onClick={this.handleEvent}>Click</button>
                <p>Student name is : {this.state.name}</p>
            </>
        )
    }
}

export default SetstateEx
