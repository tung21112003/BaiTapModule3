import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import  {useEffect} from 'react';
export function Edit(){
    const {id} =useParams();
    const[oldProduct,setOldProduct]=useState({});
    const navigate = useNavigate();
    
    let getValue =()=>{
        axios.get("http://localhost:3000/products/" + id).then((res) => {
            const { data } = res;
            setOldProduct(data);
        })
    }
    useEffect(() => {
        getValue();
    }, []);

    let edit = (data) => {
        axios.put(" http://localhost:3000/products/" + id,data ).then(() => {
            navigate("/home/list");
        })
    }
   
    return(
        <>
        <h1>Edit Product</h1>
        <Formik
         initialValues={
            oldProduct 
         }
         onSubmit={(data
         )=>edit(data)}
         enableReinitialize={true}
         >
            <Form>
            <Field name="id" type="text" placeholder="ID"></Field>
            <Field name="name"  type ="text" placeholder= "Name"></Field>
            <Field name="description"  type ="text" placeholder= "Description"></Field>
            <Field name="img"  type ="text" placeholder= "Img"></Field>
            <Field name="price"  type ="text" placeholder= "Price"></Field>
            <Field name="stock" type= "text" placeholder="Stock"></Field>
            <button>submit</button>
            </Form>
        </Formik>
        </>
    )
}