import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/Home';

function App() {
  const [currButState,setcurrBut]=useState(0);
  const [prevButState,setPrevButState]=useState(0);
  const clickHandler=()=>{
    setcurrBut((prevState)=>{
      setPrevButState(currButState);
      return prevState+1;
    })
  }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
