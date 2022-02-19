import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link,useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";



function DeleteMatches() {
  

    const[ deleteMatch , setDeleteMatch] = useState({id:""})
    const Navigate = useNavigate();
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setDeleteMatch({...deleteMatch, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const deleteMatchSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "delete" ,
                 url: '/matches/deleteMatch/id', 
                 data: {...deleteMatch},
                headers: {Authorization: localStorage.getItem("firstLogin")}
            })
            
            setSuccessMessage(response.data.message)
            Navigate("/HomeUser/MatchDeleted")
            console.log(response.data.message)
          
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }
  
    return (


<div class="w-75 mx-auto mt-50">
<h1>Borrar Partido</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={deleteMatchSubmit} className=" ">
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Numero de Partido</label>
    <div class="col-sm-10">
      <input type="Text" name="id" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
    </div>

  
     <button type="submit" class="mx-auto centrar boton-borrar-ubicacion" > Borrar Partido </button>
  </form>

  <div class="mt-50 mb-50" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 





/* <div className="registerContainer">

  <h1 > Borrar Partido</h1>
<Container className="formulario" > 

<Form  onSubmit={deleteMatchSubmit}>
   

   
   <FormGroup>
   
<Label for="exampleEmail">
Numero de Partido
</Label>

<Input className="inputClass"
type="Text" name="id" onChange={onChangeInput}
/>

</FormGroup>




  <div style={{display: successMessage? "block": "none"}}>{successMessage}</div>
  <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>



<Button type="submit">
Borrar Partido
</Button>
</Form>
</Container>
</div> */

    
  );
}

export default DeleteMatches;