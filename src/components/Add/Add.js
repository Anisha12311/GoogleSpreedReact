import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Add.css'

const Add = () =>{
  const history = useHistory()
    const [data, setData] = useState({
      ID : "",
      Avatar : "",
      Performance : ""
    })
    const handleSubmit= async (e) => {
    e.preventDefault()

 try {
   const res = await fetch("https://sheet.best/api/sheets/7f695c1f-e41a-45f3-85fe-9679dfa5078e",
   {
     method : "POST",
     headers  : {
      'Content-Type': 'application/json' ,
     },
     body : JSON.stringify(data),

   }
   )
   if(res.ok){
     history.replace("/")
   }
 } catch (error) {
   console.log(error)
 }
}
const handleChange  = (e) =>{
  setData({...data,[e.target.name] : e.target.value})
}


  return (
 <>
    <div className="header">
    <div className="logo-nav">
       Google Sheet Data Application
    </div>
    </div>
    <div className = "contain_card">
<div className = "contain_cardtext">
      <h1 className="text-muted text-center">Add</h1>
      </div>
    <form style={{ maxWidth: 500, margin: "auto" ,marginTop : "7rem"}}onSubmit={handleSubmit}>
      
      <div className="mb-3">
        <label htmlFor="number" className="form-label">
         ID
        </label>
        <input
        style = {{marginLeft : "8rem"}}
          type="number"
          className="form-control"
          name="ID"
          value={data.ID}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Avatar Name
        </label>
        <input
          type="text"
          className="form-control"
          name="Avatar"
          value={data.Avatar}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="score" className="form-label">
          Perfromance Score
        </label>
        <input
        style = {{marginLeft : "1.6rem"}}
          type="number"
          className="form-control"
          name="Performance"
          value={data.Performance}
          onChange={handleChange}
        />
      </div>
      <div className="text-center1">
        <div className = "text_add" onClick={handleSubmit}>Add</div>
      </div>
    </form>
    </div>
</>
  );
};

export default Add;
