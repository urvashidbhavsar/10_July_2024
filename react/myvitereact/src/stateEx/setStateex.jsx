import React from 'react'
class setStateex extends React.Component {
    constructor() {
        // call parent class 
        super()
        this.state = {
            name: "Abc",
            date: "30-11-2024",
            color: "red"
        }
    }
    render() {
        const change = () => {
            this.setState({ color: "blue" })
        }
        return (
            <>
                <button style={{ background: "red" }} onClick={change}>click here</button>
                <h1>{this.state.color}</h1>
            </>
        )
    }

}
export default setStateex