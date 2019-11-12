import React from "react";
import "../App.css";
export default function User(props){
    return(
        <div className="App">
            {/* display the props passed from the parent */}
            {/* props are read only */}
            <h1>I am {props.name}</h1>
            <input value={props.name} onChange={props.editUser} />
        </div>
    )
}