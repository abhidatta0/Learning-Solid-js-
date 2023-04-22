import {createSignal, createEffect} from 'solid-js';

const Counter = ()=>{
    const [count, setCount] = createSignal(0);
    const double = ()=> count()*2;

    createEffect(()=>{
        console.log("Hello", count());
    })

    console.log("component");
    return (
        <div>
            <button onClick={()=> setCount(count()+1)}>Increment</button>
            <button onClick={()=> setCount(count()-1)}>Decrement</button>
            <p>Count {count()}</p>
            <p>Double {double()}</p>
        </div>
    )

}

export default Counter;