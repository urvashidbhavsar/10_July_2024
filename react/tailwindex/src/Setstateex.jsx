import React, { Component } from 'react'

class Setstateex extends Component {
    state = {
        name: "Priya"
    }

    handleEvent = () => {
        this.setState({ name: "Sujal" })
    }
    render() {
        return (
            <>
                <button onClick={this.handleEvent} className='bg-lime-700 text-white p-2'>Change</button>
                <p>{this.state.name}</p>
                {
                    console.log(this.state)
                }
            </>
        )
    }
}
export default Setstateex
