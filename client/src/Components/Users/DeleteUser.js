import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link,useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";



function DeleteUser() {
  

    const[ deleteUser , setDeleteUser] = useState({})
    const Navigate = useNavigate();
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setDeleteUser({...deleteUser, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const deleteUserSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "delete" ,
                 url: '/users/deleteUser', 
                 data: {...deleteUser},
                headers: {Authorization: localStorage.getItem("firstLogin")}
            })
            
            setSuccessMessage(response.data.message)
            Navigate("/DeleteUserView")
            console.log(response.data.message)
          
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }
  
    return (


<div class="w-75 mx-auto mt-50">
<h1>Confirme si desea eliminar su cuenta.</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={deleteUserSubmit} className=" ">
    

  
     <button type="submit" class="mx-auto centrar boton-borrar-ubicacion" > Eliminar Cuenta  </button>
  </form>

  <div class="mt-50 mb-50" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 







    
  );
}

export default DeleteUser;