import React, {Component} from 'react';
import './App.css';
import User from "./components/User"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[
        {id: 1, name: "Shun"},
        {id: 2, name: "Ewe lin"},
        {id: 3, name: "Kats"}
      ]
    }
  }
  // only the component that has the state defined can edit the state
  editUser = (event, index) =>{
    //  update the state
  }
  render(){
    // loop through each user and pass the user name as a prop to User component
    return (
      this.state.users.map(user => <User key={user.id} name={user.name} />)
    );
  }
}

export default App;
