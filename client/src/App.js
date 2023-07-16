import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name,setname] = useState('');
  function registerUser(){

  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit ={registerUser}>
        <input type='text' placeholder='Name'
        value = {name} onChange={(e)=>setname(e.target.value)}></input>
        <input type= 'submit' value='Register'/>
      </form>
    </div>
  );
}

export default App;
