
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Add from './components/Add/Add'
function App() {
  return (
   <BrowserRouter>
   
   <div className = "container">
     <Switch>
       <Route exact path = "/" component = {Navbar}/>
       <Route exact path = "/add" component = {Add}/>

      

     </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
