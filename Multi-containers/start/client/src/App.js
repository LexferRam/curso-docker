import { useState, useEffect } from 'react'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => {
    fecthPlayers()
  }, [])

  const fecthPlayers = async () => {
    let data = await axios.get("http://localhost:5000")
    setPlayers(data.data)
  }

  console.log(players)

  return (
    <>
      <h1>Test Titulo</h1>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '100vh' }}>
        {
          players.map(player => (
            <div>
              <img src={player.url} style={{ width: 300 }} />
              <h3>{player.name}</h3>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
