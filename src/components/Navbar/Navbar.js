import React from 'react'
import './Navbar.css'
import {useHistory} from 'react-router-dom'
import Tablecontain from '../Table/Tablecontain'
 function Navbar() {
    const history = useHistory()
    return (
       
       <>
        <div className="header">
        <div className="logo-nav">
           Google Sheet Data Application
        </div>
        <div  className = "Retrive_button">
           <div className = "Retrive_text" onClick = {() => history.push("/add")}>Add</div>
          </div>
          
       </div>
       <div className = "tablecontain">
       <Tablecontain/>
       </div>
       </>
    )
}
export default Navbar