import './App.css'; 
import{useState} from 'react'

const App=()=>{  

  const[count,setCount]=useState(0) 

  const increase=()=>{
    setCount(prev=>(prev+1))
  }

  return(
    <div className="background"> 
    <h1 className="mainSentence">The button has been cliked <span className="number">{count} </span> Times!</h1> 
    <p className="instruction">Click the button to increase count</p> 
    <button type="button" className="button" onClick={increase}>Click me !</button>
      
    </div>
  )
}

export default App;
