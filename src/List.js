import axios from "axios";
import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

export function List() {
  let [List, setList] = useState([]);
  const getData = () => {
    axios.get("http://localhost:3000/products").then((res) => {
      setList(res.data);
    })
  }
  useEffect(() => {
    getData();
  }, [])

  
  
 const Delete=(id)=>{
    axios.delete("http://localhost:3000/products/"+id).then((res)=>{
        getData(res.value);
    })
 }
 const Edit =(id)=>{
   alert(id);
 }
  return (
    <>
      <h1>Product</h1>
      <table border={1}>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Description</td>
          <td>Img</td>
          <td>Price</td>
          <td>Stock</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
        {
        List.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>
              <img src={item.img} width={25} height={25} />
            </td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td><button onClick={()=>Delete(item.id)}>Delete</button></td>
            <td><Link to={"/home/edit/"+item.id}><button>Edit</button></Link></td>
          </tr>
        )
        )}
      </table>
    </>
  );
}
