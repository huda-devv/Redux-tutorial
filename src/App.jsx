import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { increment,decrement } from './redux/Slices/Counter/Counter'    //
import { change } from './redux/Slices/Bool/bool'
import { useDispatch, useSelector } from 'react-redux';

function App() {
const cnt = useSelector((state) => state.counter);
const bool = useSelector((state)=>state.change);
const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>The count is {cnt} </h2> 
      <h2>the boolean is {bool} </h2>
      <button onClick={()=> dispatch(increment())}>Incriment</button>
      <br/>
      <br/>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <br/>
      <br/>
      <button onClick={()=> dispatch(change())}>change</button>

    </>
  )
}

export default App
