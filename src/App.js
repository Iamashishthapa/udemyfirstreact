import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state =
  {
    persons:[
      {name:'Ashish',age:21},
      {name:'Sudip',age:20},
    ]
  }

  switchNameHandler = () =>{
    // console.log('something changed.');
    //Don't do this... this.state.persons[0].name='Suraj';
   this.setState({
     persons:[{name:'Suraj',age:21},
     {name:'Sudip',age:21},]
   }
   )
  }
   render(){
     return(
       <div className="App">
         <h1>Hi, I'm a React App</h1>
         <p>Check this is working</p>
         <p>My favourite fruit is mango.</p>
         <button onClick={this.switchNameHandler}>Random names</button>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>okay</Person>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>haha</Person>
      </div>
           );
    //   return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Does it work now')); 
    }
}

export default App;
