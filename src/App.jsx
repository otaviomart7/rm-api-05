import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo.png'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  

  useEffect(() => {
    api.get(`/character/?page = ${page}`).then((response) => {
        setData(response.data.results)
    }).catch((error) => {
      console.error("Deu ruim!!!", error)
    })
  }, [page])
  

  return (
    <>
      <img className={s.logo} src={logo} alt="Logo" />
      <div>
      <label>Digite uma Página:</label>
      <input min={1} max={42} type="number" placeholder='1/42' value={page} onChange={(e) => setPage(parseInt(e.target.value))}/>
    </div>
      <main>
        {data.map(item => {
          return(
            <div key={item.id}>
                <img src={item.image} alt={item.name} />
                <h4>Name: {item.name}</h4>
                <p>Species: {item.species}</p>
                {item.status === "Dead" ? "Status:🧟" : item.status === "Alive" ? "Status: 😊" : <p>Status: {item.status}</p>}
                <p>Origin: {item.origin.name}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App