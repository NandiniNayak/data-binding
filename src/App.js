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
  editUser = (index, event) =>{
    console.log(event)
    //  update the state
    // 1. take state userscopy
    const userCopy = [...this.state.users]
    // 2. update a specific index of the copied array
    userCopy[index].name = event.target.value
    // 3. set state
    this.setState({
      users: userCopy
    })
  }

  deleteUser = (index, event) => {
    const userCopy = [...this.state.users];
    userCopy.splice(index, 1);
    this.setState({
      users: userCopy
    })
  }
  
  render(){
    // loop through each user and pass the user name as a prop to User component
    // while passing arguments to an event, you should either bind or use arrow function
    return (
      this.state.users.map((user, index) => 
      <User 
         changeUser={this.editUser.bind(this,index)} 
         deleteEvent={this.deleteUser.bind(this,index)}
         key={user.id}
         name={user.name} 
      />)
    );
  }
}

export default App;
