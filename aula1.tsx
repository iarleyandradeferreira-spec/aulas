import { useState } from 'react'
import './App.css'

function App() {

  const [nome, setNome] = useState("")
const [sobrenome, setSobrenome] = useState("") 

  return (
<>
  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
<  input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}/>
  <p>{nome + " " + sobrenome}</p>
</>
  )

}
export default App
