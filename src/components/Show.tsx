import { createSignal, Show } from "solid-js";

const ShowComponent = ()=>{
 
  const [loggedIn, setLoggedIn] = createSignal(false);
  return (
    <div>
        <button onClick={()=> setLoggedIn(true)}>Login</button>
        <button onClick={()=> setLoggedIn(false)}>Logout</button>

          <p>
              {
                  loggedIn() ? 'Logout' : 'Login'
              }
              <Show when={loggedIn()} fallback={'Login'}>
                Logout
              </Show>
          </p>
    </div>
  )
}

export default ShowComponent;