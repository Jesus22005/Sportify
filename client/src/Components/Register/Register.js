import React, { useState } from 'react';
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";
import "./Register.css"

function Register() {
  
  const navigate = useNavigate()

    const[ register , setRegister]= useState(
        {nombre: "",
        apellidos: "", 
        nombreUsuario:"",
        clave:"", 
        edad:"",
        genero:"",
        localidad:"",
        email:"", 
        descripcion:""
}
    )
  
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setRegister({...register, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const registerSubmit = async e =>{
    e.preventDefault()
    try {

      
            
            const response =  await axios.post("http://localhost:5000/users/newUser", {...register})
            
            localStorage.setItem("firstLogin", true)
            // console.log(localStorage)
             setSuccessMessage(response.data.message)
             navigate("/NewUser")
            } catch (error) {
                setErrorMessage(error.response.data.message)
            }
        }


        // const edad = (e) => {
        //    let edadMS = Date.parse(Date()) - Date.parse(edad);
        //     let edads = new Date();
        //     edads.setTime(edadMS);
        //     let resultado = edads.getFullYear() - 1970;
        //     let res = (resultado <= 0) ? 0 : resultado; // Para evitar que sea negativo
        //     setRegister({...register, [edad]: parseInt(resultado)})
        //     console.log(resultado)
        //   }
  
    return (

      <body class="contenedor-register">
      <div class="w-75 mx-auto mt-50 contenedor-div-register">
        <h1 class="h1-register"> Registro</h1>

        <form class="row g-3" onSubmit={registerSubmit}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              onChange={onChangeInput}
              class="form-control"
              id="inputEmail4"
              required
              autocomplete="off"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Apellidos
            </label>
            <input
              type="text"
              name="apellidos"
              onChange={onChangeInput}
              class="form-control"
              id="inputAddress"
              placeholder=""
              required
              autocomplete="off"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Nombre de Usuario
            </label>
            <input
              type="text"
              name="nombreUsuario"
              onChange={onChangeInput}
              class="form-control"
              id="inputEmail4"
              required
              autocomplete="off"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Contraseña
            </label>
            <input
              type="Password"
              name="clave"
              onChange={onChangeInput}
              class="form-control"
              id="inputPassword4"
              required
              autocomplete="off"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Edad
            </label>
            <input
              type="Number"
              name="edad"
              onChange={onChangeInput}
              class="form-control"
              id="inputPassword4"
              required
              autocomplete="off"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Correo Electronico
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeInput}
              class="form-control"
              id="inputPassword4"
              required
              autocomplete="off"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Ciudad
            </label>
            <select
              class="form-select"
              name="localidad"
              onChange={onChangeInput}
              aria-label="Default select example"
              required
              autocomplete="off"
            >
              <option selected>Selecciona tu Ciudad.</option>
              <option value=""></option>
              <option value="Madrid">Madrid</option>
              <option value="Zaragoza">Zaragoza</option>
            </select>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Genero
            </label>
            <select
              class="form-select"
              name="genero"
              onChange={onChangeInput}
              aria-label="Default select example"
              required
              autocomplete="off"
            >
              <option selected>Selecciona tu Genero.</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div class="col-12">
            <Label for="exampleText">Descripcion</Label>
            <Input
              id="exampleText"
              name="descripcion"
              type="textarea"
              onChange={onChangeInput}
              required
              autocomplete="off"
            />
          </div>

          <div class="col-12  w-100 mx-auto contenedor-boton-register">
            <button type="submit" class="btn btn-primary boton-registro ">
              Registrarse
            </button>
          </div>
        </form>

        <div class="text-danger" style={{ display: successMessage ? "block" : "none" }}>
          {successMessage}
        </div>
        <div  class="text-danger" style={{ display: errorMessage ? "block" : "none" }}>
          {errorMessage}
        </div>
      </div>
      </body>
    );












/* <div className="registerContainer">

  <h1 > Registro</h1>
<Container className="formulario" > 

<Form  onSubmit={registerSubmit}>
   

   
   <FormGroup>
   
<Label for="exampleEmail">
Nombre
</Label>

<Input className="inputClass"
type="text" name="nombre" onChange={onChangeInput}
/>

</FormGroup>

<FormGroup>
<Label for="examplePassword">
Apellidos
</Label>
<Input sm="2"
type="text" name="apellidos" onChange={onChangeInput}
/>
</FormGroup>
<FormGroup>
<Label for="exampleSelect">
Nombre de Usuario
</Label>
<Input
type="text" name="nombreUsuario" onChange={onChangeInput}
/>
</FormGroup>
<FormGroup>
<Label for="exampleSelect">
Contraseña
</Label>
<Input
type="text" name="clave" onChange={onChangeInput}
/>
</FormGroup>
<FormGroup>
<Label for="exampleSelect">
Edad
</Label>
<Input
type="number" name="edad" onChange={onChangeInput}
/>
</FormGroup>

<FormGroup>
<Label for="exampleSelect">
Genero
</Label>

<Input
type="text" name="genero" onChange={onChangeInput} />

</FormGroup>
<FormGroup>
<Label for="exampleSelect">
Ciudad
</Label>
<select name="localidad" onChange={onChangeInput}>
<option value=""></option>
<option value="Madrid">Madrid</option>
<option value="Zaragoza" >Zaragoza</option> 
</select>
</FormGroup>

<FormGroup>
<Label for="exampleSelect">
Correo Electronico
</Label>
<Input
type="email" name="email" onChange={onChangeInput}
/>
</FormGroup>

<FormGroup>
<Label for="exampleSelect">
Deportes Favoritos
</Label>
<Input
type="text" name="deportesFavoritos" onChange={onChangeInput}
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
Registro
</Button>
</Form>
</Container>
</div> */






    // <div>
     
    //  <form onSubmit={registerSubmit}>
    //  <div><h1>Registro</h1></div>

    //  <label>Nombre</label>
    //  <input type="text" name="nombre" onChange={onChangeInput} ></input>
    //  <label>Apellidos</label>
    //  <input type="text" name="apellidos" onChange={onChangeInput}></input>
    //  <label>Nombre de Usuario</label>
    //  <input type="text" name="nombreUsuario" onChange={onChangeInput}></input>
    //  <label>Contraseña</label>
    //  <input type="text" name="clave" onChange={onChangeInput}></input>
    //  <label>Edad</label>
    //  <input type="number" name="edad" onChange={onChangeInput}></input>
    //  <label>Genero</label>
    //  <input type="text" name="genero" onChange={onChangeInput}></input>
    //  {/* <select name="genero" onChange={onChangeInput}>
    //     <option value=""></option>
    //     <option value="hombre">Hombre</option>
    //     <option value="mujer" >Mujer</option>
    // </select> */}
    //  <label>Localidad</label>
    //  {/* <input type="text" name="localidad" onChange={onChangeInput}></input> */}
    //  <select name="localidad" onChange={onChangeInput}>
    //     <option value=""></option>
    //     <option value="Madrid">Madrid</option>
    //     <option value="Zaragoza" >Zaragoza</option>
    // </select>
    //  <label>Correo Electronico</label>
    //  <input type="email" name="email" onChange={onChangeInput}></input>
    //  <label>Deportes Favoritos</label>
    //  <input type="text" name="deportesFavoritos" onChange={onChangeInput}></input>
    //  <label>Descripcion</label>
    //  <textarea name="descripcion" rows="10" cols="10" onChange={onChangeInput}></textarea>

    //  <div style={{display: successMessage? "block": "none"}}>{successMessage}</div>
    //        <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
    //  <button type="submit">Registro</button>
     

    //  </form>
     
  
    // </div>
    
  
}

export default Register;