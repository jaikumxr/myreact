import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {
        name: "Jai",
        age:19
      },
      {
        name: "Kali",
        age:18
      },{
        name:"Adi",
        age:19
      }
    ]
  }
    
  render() {
    return(
      <div className="App">
        <h1>Hi! I am a react app.</h1>
        <p>Hey! This is a paragraph.</p>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbies: Playing games.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>

      </div>

    )
      
      // return React.createElement('div',null,'h1','Hi! I\'m a react App');
      // return React.createElement('div',{className:'App'},React.createElement("div",null,"This is a div."));
  }
}

// class Body extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h2>This is the body.</h2>
//         <p>This is the body's paragraph. Say hi to me.</p>
//       </div>
//     )
//   }
// }

export default App;
