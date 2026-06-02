import './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    api.get('/character').then((response) => {
        setData(response.data.results)
    }).catch((error) => {
      console.error('Deu Ruim')
    })

  }, [])
  

  return (
    <>
      <img src="" alt="" />
      <main>
        {data.nap((item, index) => {
          return(
            <div key = 'index'>
              <img src={item.image} alt={item.image} />
              <h3>{item.name}</h3>
              <p>Species: {item.species}</p>
              {item.status === "Dead" ? "Status: ☠️" : item.status === "Alive" ? "Status: ❤️" : <p>Status: {item.status}</p> }
              <p>Origin: {item.origin.name}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}


export default App
