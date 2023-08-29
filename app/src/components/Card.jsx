import React from 'react'

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        pokemon.map((i) => {
            return (
                <>
                    <div className="card" key={i.id} onClick={() => infoPokemon(i)}>
                        <h2>{i.id}</h2>
                        <img src={i.sprites.front_default} alt="Image" />
                        <h2>{i.name}</h2>
                    </div>
                </>
            )
        })
      }
      
    </>
  )
}

export default Card
