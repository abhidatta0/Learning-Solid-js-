import {createSignal} from 'solid-js';

const Counter = ()=>{
    const [count, setCount] = createSignal(0);
    return (
        <div>
            <button onClick={()=> setCount(count()+1)}>Increment</button>
            <button onClick={()=> setCount(count()-1)}>Decrement</button>
            <p>Count {count()}</p>
        </div>
    )

}

export default Counter;