import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";


function ModifyLocation() {

    const [idLugar, setIdLugar] = useState([])
   
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setChangeLocation({...changeLocation, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
  
    const role = localStorage.getItem('role')
    // console.log("role", role)
    const token = localStorage.getItem('firstLogin')
  
    const navigate = useNavigate()

    useEffect(() => {
        const getLugar = async ()=>{
            try { 
                let response2 = await axios.get(
                    "/locations/sportify-locations"
                    )
    
                    setIdLugar(response2.data.ubicacion);
         
         console.log(response2)
    } catch (error) {
                   
    }
    }
    getLugar()
    },[]);

    useEffect(()=>{
        if (role == 0) navigate('/')
    },[])
    const[ changeLocation , setChangeLocation] = useState(
        {
            precio:"", 
        direccion:"",
        contacto:"",
}
    )
  
    

    const changeLocationSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "put" ,
                 url: '/locations/updateLocation/id', 
                 data: {...changeLocation},
                 headers: {Authorization: localStorage.getItem("firstLogin"),  role: (localStorage.getItem("role"))},
            })
            
            setSuccessMessage(response.data.message)
            console.log(response.data.message)
            navigate("/HomeUser/UpdateLocationView")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }
  
    return (


<div class="w-75 mx-auto mt-50 location-container">
        <h1> Modificar Instalacion.</h1>

        <form class="row g-3" onSubmit={changeLocationSubmit}>
        <div class="col-md-6">
        <label for="inputAddress" class="form-label">
              Instalacion
            </label>
            <select
              class="form-select select-location"
              name="id"
              onChange={onChangeInput}
              aria-label="Default select example"
            >
              <option className=" " selected>Seleccione Instalacion.</option>
              {idLugar.map((item) => {
                return (
                  <option key={item._id}  value={item._id}>
                    {item.nombre}
                  </option>
                );
              })}
            </select>
            </div>
            
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
             Precio
            </label>
            <input
              type="Text"
              name="precio"
              onChange={onChangeInput}
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Direccion
            </label>
            <input
              type="Text"
              name="direccion"
              onChange={onChangeInput}
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Contacto
            </label>
            <input
              type="Text"
              name="contacto"
              onChange={onChangeInput}
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
          
         
          <div class="col-12  w-100 mx-auto">
            <button type="submit" class="btn btn-primary ">
              Modificar Ubicacion
            </button>
          </div>
        </form>

        <div style={{ display: successMessage ? "block" : "none" }}>
          {successMessage}
        </div>
        <div style={{ display: errorMessage ? "block" : "none" }}>
          {errorMessage}
        </div>
      </div>









/* <div className="registerContainer">

  <h1 > Modificar Instalacions Deportiva</h1>
<Container className="formulario" > 

<Form  onSubmit={changeLocationSubmit}>
   

   
   <FormGroup>
   
<Label for="exampleEmail">
Precio
</Label>

<Input className="inputClass"
type="Text" name="precio" onChange={onChangeInput}
/>

</FormGroup>
<FormGroup>
   
   <Label for="exampleEmail">
   Direccion
   </Label>
   
   <Input className="inputClass"
   type="text" name="direccion" onChange={onChangeInput}
   />
   
   </FormGroup>
   <FormGroup>
<Label for="exampleText">
Contacto
</Label>
<Input
id="exampleText"
name="contacto"
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

export default ModifyLocation;