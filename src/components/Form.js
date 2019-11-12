import React, {Component} from "react";
import "../App.css";

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:''
        }
    }
    render(){
        return(
            <div className="App">
                <input onChange={(event)=> this.setState({userName: event.target.value})}/>
                {/* call the event handler defined in the parent component and pass the userName as an argument */}
                <button onClick={() => this.props.addEvent(this.state.userName)}>Add User</button>
            </div>
        )
    }
}