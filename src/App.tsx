import { useState } from 'react'
import './App.css'

import { connectWalletAction } from "./index"

function App() {
  // const [count, setCount] = useState<number>(0);
  // const [an, setAn] = useState<Array<number>>([1,2,3,4,5]);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">WELCOME TO FUNDIN</h1>
      <button className="" onClick={()=> connectWalletAction()}>connect wallet</button>
    </div>
  )
}

export default App
