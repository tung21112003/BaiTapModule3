import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Add } from "./Add";
import { List } from "./List";


function App() {
  return (
    <>
  
    <Routes>
    <Route path="/list" element = {<List/>}/>
      <Route path="/add" element ={<Add/>}/>
      <Route path="home" element= {<Home/>}>
      <Route path="add" element ={<Add/>}/>
      <Route path="list" element = {<List/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
