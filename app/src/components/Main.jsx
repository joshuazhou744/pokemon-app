import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from './Pokeinfo'
import axios from 'axios'

const Main = () => {

    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [pokeDex, setPokeDex] = useState();
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();

    const pokeFun = async() => {
        setLoading(true);
        const res = await axios.get(url);
        setPrev(res.data.previous)
        setNext(res.data.next)
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async(res) => {
        res.map(async(i) => {
            const result = await axios.get(i.url)
            setPokeData(state => {
                state=[...state, result.data]
                state.sort((a,b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun()
    }, [url])

  return (
    <div className='container'>
      <div className="left-content">
        <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)}/>
        <div className="btn-group">
            {
                prev && <button onClick={() => {
                    setPokeData([])
                    setUrl(prev)
                }}
                >Previous</button>
            }
            {
                next && <button onClick={() => {
                    setPokeData([])
                    setUrl(next)
                }}
                >Next</button>
            }
        </div>
      </div>

      <div className="right-content">
        <Pokeinfo data={pokeDex}/>
      </div>
    </div>
  )
}

export default Main
