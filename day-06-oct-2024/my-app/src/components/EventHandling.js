import { useState } from "react"

const EventHandling = () =>{

    const [count, setCount] = useState(0)

    function handleIncrement(){
        setCount(count + 1);
    }
    function handleDecrement(){
        if (count <= -5){
            alert("Count Cannot be less than 5")
        }
        else{
            setCount(count - 1);
        }
    }

    function handleReset(){
        setCount(0);
    }

    return (
        <div>
            <h1>Event Handling Example</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default EventHandling