
import { useState } from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState("");
  const backspace = () => { try{setVal("")}  catch(error){alert("error")}}
  const calculation = () => { try{ setVal(eval(val))}  catch(error){alert("error")}}

  
  return (
    <div className='cal'>
      <input className='text-box' placeholder='Enter' value={val} />
      <div className='grid'>
        

       <button className='orange' value="C" onClick={()=>backspace()}>C</button>
       <button className='orange' value="." onClick={(e)=>setVal(val+ e.target.value)}>.</button>
       <button className='orange' value="%" onClick={(e)=>setVal(val+ e.target.value)}>%</button>
       

       <button className='orange' value="/" onClick={(e)=>setVal(val+ e.target.value)}>/</button>
       <button value="7" onClick={(e)=>setVal(val+ e.target.value)}>7</button>
       <button value="8" onClick={(e)=>setVal(val+ e.target.value)}>8</button>

       <button value="9" onClick={(e)=>setVal(val+ e.target.value)}>9</button>
       <button className='orange' value="*" onClick={(e)=>setVal(val+ e.target.value)}>x</button>
       <button value="4" onClick={(e)=>setVal(val+ e.target.value)}>4</button>

       <button value="5" onClick={(e)=>setVal(val+ e.target.value)}>5</button>
       <button value="6" onClick={(e)=>setVal(val+ e.target.value)}>6</button>
       <button className='orange' value="-" onClick={(e)=>setVal(val+ e.target.value)}>-</button>

       <button value="1" onClick={(e)=>setVal(val+ e.target.value)}>1</button>
       <button value="2" onClick={(e)=>setVal(val+ e.target.value)}>2</button>
       <button value="3" onClick={(e)=>setVal(val+ e.target.value)}>3</button>

       
       <button className='orange' value="+" onClick={(e)=>setVal(val+ e.target.value)}>+</button>
       </div>
       <button className='zero' value="0" onClick={(e)=>setVal(val+ e.target.value)}>0</button>
       <button value="=" onClick={()=>calculation()}>=</button>

      
    </div>
  );
}

export default App;
