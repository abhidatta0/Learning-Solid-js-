import {For, createSignal, Index} from 'solid-js';

const ForComp = ()=>{
    //list of emojis
    const [emojis, setEmojis] = createSignal([
    {id: 1, name:'happy'},
        {id: 2, name:'sad'},
        {id: 3, name:'poop'},
        {id: 3, name:'xyz'},
    ]);

    const addEmoji = ()=>{
        const newEmojis = [...emojis()];
        newEmojis.push({id: emojis.length, name:'angry'});
        setEmojis(newEmojis);
    }

    const updateEmoji = ()=>{
        const newEmojis = [...emojis()];
        newEmojis[2] = {id: emojis.length, name:'angry'};
        setEmojis(newEmojis);
    }

    return (
        <div>
            <button onClick={addEmoji}>Add</button>
            <button onClick={updateEmoji}>Update</button>

            {
                emojis().map((em)=> <p>{em.name}</p>)
            }

            <hr />

            <For each={emojis()}>
                {
                    (em)=><p>{em.name}</p>
                }
            </For>
            <hr />

            <Index each={emojis()}>
                {
                    (em)=><p>{em().name}</p>
                }
            </Index>
        </div>
    )

}

export default ForComp;