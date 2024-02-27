import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [toggle,setToggle] = useState(false)

  const toggleText = toggle ? "Monthly Plans" : "Annual Plans";

  const handleToggle = () => {
    setToggle(toggle === false)
  }

  return (
    <div className="App">
      <h1>Flexible Pricing!</h1>
      <h2>We have a variety of options available for you...</h2>
      <h2>Choose your own price plan!</h2>
      <br/><br/><br/><br/>
      <div className = 'button-space'>
        <Button toggleText={toggleText} onClick={handleToggle} />
      </div>
      <div className='box-space'> 
        <div className='box'>
          <div className='box-content'>
            <h1>{toggle ? "$80" : "$10"}</h1>
            <b>{toggle ? "Save $40!" : ""}</b>
            <p>{toggle ? "Annually" : "Per Month"}</p>
           <h2>{toggle ? "Standard Plan" : "Standard Plan"}</h2>
           <b>{toggle ? "Our Standard Plan includes all your basic webpage needs!" : "Our Standard Plan includes all your basic webpage needs!"}</b>
          </div>
        </div>
        <div className='box'>
          <div className='box-content'>
            <h1>{toggle ? "$120" : "$15"}</h1>
            <b>{toggle ? "Save $60!" : ""}</b>
            <p>{toggle ? "Annually" : "Per Month"}</p>
            <h2>{toggle ? "Standard+ Plan" : "Standard+ Plan"}</h2>
            <b> {toggle ? "Our Standard+ Plan will open even more avenues for your webpage creativity!" : "Our Standard+ Plan will open even more avenues for your webpage creativity!"}</b>
          </div>
        </div>
        <div className='box'> l
          <div className='box-content'>
            <h1>{toggle ? "$200" : "$25"}</h1>
            <b>{toggle ? "Save $100!" : ""}</b>
            <p>{toggle ? "Annually" : "Per Month"}</p>
            <h2>{toggle ? "Premium Plan" : "Premium Plan"}</h2>
            <b>{toggle ? "The pinnacle of webpage productivity! Our Premium Plan will excel your webpage creation and efficiency 100% guaranteed!" : "The pinnacle of webpage productivity! Our Premium Plan will excel your webpage creation and efficiency 100% guaranteed!"}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
