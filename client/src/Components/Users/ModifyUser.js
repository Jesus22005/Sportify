import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";


function ModifyUser() {
  
    const Navigate = useNavigate();
    const[ changeUser , setChangeUser] = useState(
        {
            email:"",
            descripcion:"",
            clave:"",
}
    )
  
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setChangeUser({...changeUser, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const changeUserSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "put" ,
                 url: 'http://localhost:5000/users/updateUser', 
                 data: {...changeUser},
                headers: {Authorization: localStorage.getItem("firstLogin")}
            })
            
            setSuccessMessage(response.data.message)
            console.log(response.data.message)
            Navigate("/HomeUser/ModifyUserView")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }
  
    return (


        <div class="w-75 mx-auto mt-50">
<h1>Modificar Datos</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={changeUserSubmit} className=" ">
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Correo Electronico</label>
    <div class="col-sm-10">
      <input type="Text" required name="email" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
    <div class="col-sm-10">
      <input type="Password" required name="clave" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Descripcion</label>
    <div class="col-sm-10">
      <input type="textarea" required  rows="10" name="descripcion" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
    </div>

  
     <button type="submit" class="mx-auto centrar boton-borrar-ubicacion" > Modificar Datos </button>
  </form>

  <div class="mt-50 mb-50" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 



/* <div className="registerContainer">

  <h1 > Modificar Datos</h1>
<Container className="formulario" > 

<Form  onSubmit={changeUserSubmit}>
   

   
   <FormGroup>
   
<Label for="exampleEmail">
Correo Electronico
</Label>

<Input className="inputClass"
type="Text" name="email" onChange={onChangeInput}
/>

</FormGroup>
<FormGroup>
   
   <Label for="exampleEmail">
   Contraseña
   </Label>
   
   <Input className="inputClass"
   type="text" name="clave" onChange={onChangeInput}
   />
   
   </FormGroup>
   <FormGroup>
<Label for="exampleText">
Descripcion
</Label>
<Input
id="exampleText"
name="descripcion"
type="textarea"
onChange={onChangeInput}
/>
</FormGroup>



  <div style={{display: successMessage? "block": "none"}}>{successMessage}</div>
  <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>



<Button type="submit">
Modificar Datos
</Button>
</Form>
</Container>
</div> */

    
  );
}

export default ModifyUser;