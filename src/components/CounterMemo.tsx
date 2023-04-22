import {createSignal, createMemo} from 'solid-js';

const CounterMemo = ()=>{
    const [count, setCount] = createSignal(0);
    const double = createMemo(()=> {
        console.log("ran");
        return count()*2;
    });
    return (
        <div>
            <button onClick={()=> setCount(count()+1)}>Increment</button>
            <button onClick={()=> setCount(count()-1)}>Decrement</button>
            <p>Count {count()}</p>
            <p>Double {double()}</p>
            <p>Double {double()}</p>
            <p>Double {double()}</p>
            <p>Double {double()}</p>
        </div>
    )

}

export default CounterMemo;