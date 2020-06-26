import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Jai",age:19},
      {name: "Kali",age:18},
      {name:"Adi",age:19}
    ],
    otherState: 'some other value'
  });

  console.log(personsState);
  
  
  const switchNameHandler = () =>{
    // console.log("Was clicked");
    setPersonsState({
      persons:[
        {name: "Jai",age:19},
        {name: "Prerit",age:19},
        {name: "Adi",age:20}
      ],
      otherState: personsState.otherState
    });
  }

    return(
      <div className="App">
        <h1>Hi! I am a react app.</h1>
        <p>Hey! This is a paragraph.</p>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Playing games.</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>

      </div>
    )
      // return React.createElement('div',null,'h1','Hi! I\'m a react App');
      // return React.createElement('div',{className:'App'},React.createElement("div",null,"This is a div."));
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

export default app;

// state = {
//   persons: [
//     {name: "Jai",age:19},
//     {name: "Kali",age:18},
//     {name:"Adi",age:19}
//   ]
// }

