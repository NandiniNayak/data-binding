import React, {Component} from "react";
import "../App.css"

export default class DataBinding extends Component {
    // initialize method to create state variables
    constructor(props){
        super(props)
        this.state={
            title: "REACT 101"
        }
    }
    // handle change gets called each time the input value changes
    // this updates the state title with input value
    handleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    // render returns html content on the page
    render(){
        return(
            <div className="App">
                <h1>{this.state.title}</h1>
                <input onChange={(event) => {this.setState({ title: event.target.value})
                }} value={this.state.title}/>
            </div>
        )
    }
}