import React , { useEffect, useState } from 'react'
import axios from 'axios';

function PokemonAPI() {

    const [num, setnum] = useState('')
    const [names, setnames] = useState('');
    const[movesp, setmoves] = useState('');
    const[ability, setability] = useState('');

    useEffect(() =>{
        // alert('hii')

        async function getData() {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          console.log(res)
          setnames(res.data.name)
          setmoves(res.data.moves.length)
          // setability(res.data.abilities.length);
    }
      getData();
    }
    
    )
    return (
        <>
         <h1>You choose {names} </h1>
         <h1>It have {movesp} moves</h1>
         {/* <h1>{names} has {ability} no. abilities</h1> */}
         <select value={num} onChange={(event) =>{
             setnum(event.target.value)
         }}>
             <option value='1'>1</option>
             <option value='25'>25</option>
             <option value='3'>3</option>
             <option value='4'>4</option>
             <option value='5'>5</option>
         </select>   
        </>
    )
}

export default PokemonAPI
