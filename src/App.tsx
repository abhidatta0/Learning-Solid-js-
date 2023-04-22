import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const Nested = ()=>{
  return <h1>Nested</h1>
}
const App: Component = () => {
  return (
    <div class={styles.App}>
      <Nested />
    </div>
  );
};

export default App;

// React / Solid -> Component based archi
/*
   <Parent>
     <Child1 />
   </Parent>
*/