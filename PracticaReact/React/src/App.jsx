import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>==Calculadora en React==</p>
        <p>
          {/*<button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>--*/}
          <table className='calculadora' border="2">
            <tr>
              <td colSpan={4}>
                <input type="text" id="display" value=""></input>
              </td>
            </tr>
            <tr>
              <td><button type="button" onClick={()=>{display.value=''}}>C</button></td>
              <td><button type="button" onClick={()=>{display.value+='('}}>(</button></td>
              <td><button type="button" onClick={()=>{display.value+=')'}}>)</button></td>
              <td><button type="button" onClick={()=>{display.value+='/'}}>/</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={()=>{display.value+=7}}>7</button></td>
              <td><button type="button" onClick={()=>{display.value+=8}}>8</button></td>
              <td><button type="button" onClick={()=>{display.value+=9}}>9</button></td>
              <td><button type="button" onClick={()=>{display.value+='*'}}>*</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={()=>{display.value+=4}}>4</button></td>
              <td><button type="button" onClick={()=>{display.value+=5}}>5</button></td>
              <td><button type="button" onClick={()=>{display.value+=6}}>6</button></td>
              <td><button type="button" onClick={()=>{display.value+='-'}}>-</button></td>
            </tr>
            <tr>
              <td><button type="button" onClick={()=>{display.value+=1}}>1</button></td>
              <td><button type="button" onClick={()=>{display.value+=2}}>2</button></td>
              <td><button type="button" onClick={()=>{display.value+=3}}>3</button></td>
              <td><button type="button" onClick={()=>{display.value+='+'}}>+</button></td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="button" onClick={()=>{display.value+=0}}>0</button>
              </td>
              <td><button type="button" onClick={()=>{display.value+='.'}}>.</button></td>
              <td>
                <button type="button" onClick={()=>{display.value=eval(display.value)}}>=</button>
              </td>
            </tr>
          </table>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
