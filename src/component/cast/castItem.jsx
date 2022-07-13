import React from 'react'

function CastItem({data}) {
    const {name, character, profile_path} = data

  return (
    <div className='cast-item'>
        <div
            style={{
                // aspectRatio: "9/16",
                backgroundColor: "#222",
                borderRadius: "10px",
              }}
        >
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="{name}" />
              
        </div>
        <div  style={{marginTop:"10px"}}>
              <p className='cast-name'>{name}</p>
              <p className='cast-character'>{character}</p>
        </div>
    </div>
  )
}

export default CastItem