import { Component } from "react";

class Userinput extends Component {
    state = {
        name: ""
    }

    handleEvent = (e) => {
        this.setState({ name: e.target.value })
        console.log(e.target.value);
    }
    render() {
        return (
            <>
                <div className="m-3">
                    <input type="text" name="" id="" className="border-solid border-b-2 border-black" onChange={this.handleEvent} />

                    <p>You Entered : {this.state.name}</p>
                </div>
            </>
        );
    }
}
export default Userinput;