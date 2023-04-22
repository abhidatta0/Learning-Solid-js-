import type { Component } from 'solid-js';
import {createSignal} from 'solid-js';
import logo from './logo.svg';
import styles from './App.module.css';
import Counter from './components/Counter';
import CounterMemo from './components/CounterMemo';

const App: Component = () => {
  return (
    <div class={styles.App}>
      {/* <Counter /> */}
      <CounterMemo />
    </div>
  );
};

export default App;
