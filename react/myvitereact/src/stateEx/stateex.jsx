import React from 'react'

class stateex extends React.Component {
    constructor() {
        super()
        let dt = new Date()
        this.state = { name: "abc", date: dt.toLocaleDateString() }
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.state.date}</h1>
            </>
        )
    };
}

// const stateex = () => {
//     return (
//         <>
//             <h1>{this.state.name}</h1>
//         </>
//     )
// }

export default stateex