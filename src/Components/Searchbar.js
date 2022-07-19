import { v4 as uuid } from 'uuid';
import { useState } from "react"

export  const Searchbar =(props)=>{
    
    const [ name , setname] = useState("");
    const [ id , setid] = useState(uuid());

    const handleChange=(e)=>{
        setname(e.target.value)
    }

    const handle =(e)=>{
        e.preventDefault();
        props.addUser( {name} ,{id})
    }

    return(
        <div  className="box1">
            <input placeholder="entrer un nom" className="searchbar" onChange={handleChange}   />
            <button onClick={handle} > +</button>
            
            </div>

    )
}