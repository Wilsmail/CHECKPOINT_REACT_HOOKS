import {faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export  const User =(props)=>{
    const del=(id)=>{
        props.sup(id)
    }
        return(
            <div className="user" >
                <div className="userprofil" >
                    <img src="image.jpg" className="img" />
                </div>
                    <div className="userinfo" >
                        <h4>{props.name}</h4>
                        <p>Description de la chaussure  {` `}
                        <FontAwesomeIcon icon={faTrashCan}  className="ikon" onClick={(e)=> del(props.id)}/></p><hr/>  
                    </div>
            </div>)
    }