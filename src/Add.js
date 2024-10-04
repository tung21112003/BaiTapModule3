import { Field, Formik, Form } from "formik"
import { useNavigate } from "react-router-dom"
import axios from "axios";
export function Add(){
    const navigate = useNavigate();
    const  Add = (value)=>{
        axios.post(" http://localhost:3000/products",value).then(()=>{
            navigate("/home/list");
        })
    }
    return(
       <><h1>Add</h1>
       <Formik
         initialValues={{
           name: '',
           description:'',
           img : '',
           prict:'',
           stock: '',
         }}
         onSubmit={Add}
       >
        <Form>
            <Field name="name"  type ="text" placeholder= "Name"/>
            <Field name="description"  type ="text" placeholder= "Description"/>
            <Field name="img"  type ="text" placeholder= "Img"/>
            <Field name="price"  type ="text" placeholder= "Price"/>
            <Field name="stock" type= "text" placeholder="Stock"/>
           <button type="submit">Add</button>
        </Form>
       </Formik>
       </>
    )
}