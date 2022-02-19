import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link,useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";
import "./DeleteLocation.css"

function DeleteSports() {
  
    const role = localStorage.getItem('role')
  // console.log("role", role)
  const token = localStorage.getItem('firstLogin')


  const [idItem, setIdItem] = useState([])
    

  const navigate = useNavigate()
  useEffect(()=>{
      if (role == 0) navigate('/')
  },[])


  useEffect(() => {
    const getItems = async ()=>{
        try { 
    let response1 = await axios.get("/sports/sportify-sports")
    setIdItem(response1.data.deportes)
     
     console.log(response1)
} catch (error) {
               
}
}
getItems()
},[]);

    const[ deleteSport , setDeleteSport] = useState({id:""})
    const Navigate = useNavigate();
    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setDeleteSport({...deleteSport, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const deleteSportSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "delete" ,
                 url: '/sports/deleteSport/id', 
                 data: {...deleteSport},
                headers: {Authorization: localStorage.getItem("firstLogin"),  role: (localStorage.getItem("role"))}
            })
            
            setSuccessMessage(response.data.message)
            Navigate("/HomeUser/DeleteSportView")
            console.log(response.data.message)
          
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }
  
    return (



<div class="w-75 mx-auto mt-50">
<h1>Borrar Deporte</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={deleteSportSubmit} className=" ">
    <label for="inputAddress" class="form-label">
              Deporte
            </label>
            <select
              class="form-select select-location"
              name="id"
              onChange={onChangeInput}
              aria-label="Default select example"
            >
              <option selected>Selecciona el Deporte</option>
              {idItem.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {" "}
                    {item.deporte}
                  </option>
                );
              })}
            </select>

  
     <button type="submit" class="mx-auto centrar boton-borrar-ubicacion" > Borrar Deporte </button>
  </form>

  <div class="mt-50 mb-50" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 






/* <div className="registerContainer">

  <h1 > Borrar Ubicacion</h1>
<Container className="formulario" > 

<Form  onSubmit={deleteLocationSubmit}>
   

   
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
Borrar Ubicacion
</Button>
</Form>
</Container>
</div> */

    
  );
}

export default DeleteSports;