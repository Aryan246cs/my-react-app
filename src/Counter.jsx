import React, {useState} from 'react';
function Counter(){
    const[count, setCount] = useState(0);
    const[name , setName] = useState("Guest");

    const increment = () => {
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);

    }
    const decrement = () =>{
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);

    }
    const reset = () => {
        setCount(c => c = 0);
    }
    function handlenameOnchange(event){
        setName(event.target.value);
    }

    return(<div className = "counter-container">
        <p className = "Count-display">{count}</p>
        <button className = "counter-button" onClick={decrement}>Decrement</button>
        <button className = "counter-button" onClick={reset}>Reset</button>
        <button className = "counter-button" onClick={increment}>Increment</button>
<br />
        <input value={name} onChange={handlenameOnchange}></input>
        <p>Name: {name}</p>
 
        
    </div>);

}
export default Counter