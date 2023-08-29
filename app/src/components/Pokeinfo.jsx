import React from 'react'

const Pokeinfo = ({data}) => {
  return (
    <div>
      {
        (!data)? '' : (
          <>
            <h1>{data.name}</h1>
            <img src={data.sprites.front_default} alt="" />
            <div className="abilities">
              {
                data.abilities.map(n => {
                  return (
                    <>
                      <div className="group" key={n.id}>
                        <h2>{n.ability.name}</h2>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className="base-stat">
              {
                data.stats.map(i => {
                  return (
                    <>
                      <h3 key={i.id}>{i.stat.name} : {i.base_stat}</h3>
                    </>
                  )
                })
              }
            </div>
          </>
        )
      }
    </div>
  )
}

export default Pokeinfo

