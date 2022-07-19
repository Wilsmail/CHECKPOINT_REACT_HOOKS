import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import style from './style.css';
import { Userlist } from './Components/Userlist';
import { useState } from "react"
import { Searchbar } from './Components/Searchbar';


function App() {
  const [ name , setname] = useState(
    [ 
      {
        id:0 ,
        name:"JORDAN AIR"
      }
    ]
    );

    const del=(id)=>{
      alert(id)
    let newstudent=name.filter(student=>student.id !== id);
    setname(newstudent)
    
  }

  const handleAdd=(user)=>{

    let newUser=[...name];
    newUser.push(user);
    setname(newUser);
    }
  return (
    <div className="App" style={{backgroundColor:"whitesmoke", height:"98vh"}}>
      <Navbar></Navbar>
      <div style={{maxWidth:"100vw"}}>
        <h1 className="title" style={{marginBottom:100}}>CHECKPOINT <br/>REACT HOOKS</h1>
        <br/>
      </div>
      <div className="bigbox">
        <Searchbar addUser={handleAdd}/>
        <hr />
        <Userlist users={name} handleDelete={del}/>
      </div>
    </div>
  );
}

export default App;
