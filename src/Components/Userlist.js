import { User } from './User';

export  const Userlist =(props)=>{

    const  deleting=(id)=>{
        props.handleDelete(id)
    }


    return(
    
    <div  className="box2">
            {props.users.map(user => <User name={user.name} id={user.id}  sup={deleting} />)} 
    </div>
    
)}