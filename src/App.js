import React, { useState } from 'react';
import './App.css'; 
import Person from './Person/Person';

const App = (props) => {

  const [personState,setPersonState] = useState({
    persons:[
      {name:'Ashish',age:21},
      {name:'Sudip',age:20},
    ]
  });

  const [otherState,setOtherState]=useState('some other value');

  console.log(personState,otherState);

const switchNameHandler = () =>{
    // console.log('something changed.');
    //Don't do this... this.state.persons[0].name='Suraj';
   setPersonState({
     persons:[{name:'Suraj',age:21},
     {name:'Sudip',age:21},]
   }
   )
  }
     return(
       <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>Check this is working</p>
         <p>My favourite fruit is mango.</p>
         <button onClick={switchNameHandler}>Random names</button>
         <Person name={personState.persons[0].name} age={personState.persons[0].age}>okay</Person>
         <Person name={personState.persons[1].name} age={personState.persons[1].age}>haha</Person>
      </div>
           );
    //   return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does it work now')); 
}

export default App;
