import { Link, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Home(){
    return(
        <>
        <Header/>
        <hr/>
        <h2> | <Link to="/home">Home</Link> |
         <Link to="/add">Add</Link> |
         <Link to = "/list">List</Link> |
        </h2>
      
        <hr/>
        <Outlet/>
        <hr/>
        <Footer/>
        </> 
        
        
    )
}