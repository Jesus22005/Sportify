import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";
import "./NewMatch.css"


function NewMatch() {
  
    const Navigate = useNavigate();
    const[ newMatch , setNewMatch] = useState(
        {
            sport:"",
            jugadores:"",
            date:"",
            hora:"",
            lugar:"",
            precio:"",
            user:"",
            status:"",
            cupos:""
}
    )


    const [idLugar, setIdLugar] = useState([])
    const [idItem, setIdItem] = useState([])


useEffect(() => {
    const getLugar = async ()=>{
        try { 
            let response2 = await axios.get(
                "http://localhost:5000/locations/sportify-locations"
                )

                setIdLugar(response2.data.ubicacion);
     
     console.log(response2)
} catch (error) {
               
}
}
getLugar()
},[]);
    

useEffect(() => {
    const getItems = async ()=>{
        try { 
    let response1 = await axios.get("http://localhost:5000/sports/sportify-sports")
    setIdItem(response1.data.deportes)
     
     console.log(response1)
} catch (error) {
               
}
}
getItems()
},[]);

console.log("idite", idItem)
console.log("lugarId", idLugar)

    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setNewMatch({...newMatch, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    const newMatchSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "post" ,
                 url: 'http://localhost:5000/matches/newMatch', 
                 data: {...newMatch},
                headers: {Authorization: localStorage.getItem("firstLogin")}
            })
            
            setSuccessMessage(response.data.message)
            console.log(response.data.message)
            Navigate("/HomeUser/NewMatchView")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }

       



        const mostrarLugares =  Object.entries(idLugar).map(([key, value]) => { 
            
            return {[key]: value};
            // <option value={iLugar._id}> {iLugar.nombre}</option>, 
            
            console.log("1", key)
        })

        

        console.log("8",mostrarLugares)

    return (


      <body> <div class="w-75 mx-auto mt-50">
      <h1> {mostrarLugares.nombre}Crear Partido</h1>

      <form class="row g-3" onSubmit={newMatchSubmit}>
        <div class="col-l-4">
          <label for="inputEmail4" class="form-label">
            Deporte
          </label>

          <select
            class="form-select"
            name="sport"
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
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Jugadores
          </label>
          <input
            type="Number"
            name="jugadores"
            onChange={onChangeInput}
            class="form-control"
            id="inputEmail4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Cupos
          </label>
          <input
            type="Number"
            name="cupos"
            onChange={onChangeInput}
            class="form-control"
            id="inputAddress"
            placeholder="11"
          />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Fecha
          </label>
          <input
            type="date"
            name="date"
            onChange={onChangeInput}
            class="form-control"
            id="inputEmail4"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Hora
          </label>
          <input
            type="Time"
            name="hora"
            onChange={onChangeInput}
            class="form-control"
            id="inputPassword4"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Lugar
          </label>
          <select
            class="form-select"
            name="lugar"
            onChange={onChangeInput}
            aria-label="Default select example"
          >
            <option selected>Selecciona el Lugar.</option>
            {idLugar.map((item) => {
              return (
                <option key={item._id} value={item._id}>
                  {" "}
                  {item.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div class="col-12  w-100 mx-auto">
          <button type="submit" class="btn btn-primary ">
            Crear Nuevo Partido
          </button>
        </div>
      </form>

      <div style={{ display: successMessage ? "block" : "none" }}>
        {successMessage}
      </div>
      <div style={{ display: errorMessage ? "block" : "none" }}>
        {errorMessage}
      </div>
    </div></body>
      
    );
}

export default NewMatch;







// function Selector() {

//     const [idItem, setIdItem] = useState(null);
  
//     const items = function (e){
//     const opcion = e.target.value;
//     console.log(items);
    
//     setItem(items);
  
//     }
    
  
//       return (
//           <div>
//               <h3>Categorias</h3>
//               <select name="categorias" id="selCategorias" onClick={handlerCargarArticulos}>
//                 <option value={-1}>Seleccione una opción: </option>
//                 {
//                   categorias.map((item, i)=>(
//                     <option key={"categoria"+i} value={i}> {item.nombre}</option>
//                   ))
//                 }
//               </select>
//               <div></div>
//               <h3>Articulos</h3>
//               <select name="articulos" id="selarticulo">
//                 {
//                   idArticulos > -1 && 
//                   (
//                     categorias[idArticulos].articulos.map((item,i)=>(
//                       <option key={"articulo"+i} value="">{item}</option>
//                     ))
//                   )
//                 }
//               </select>


// ........................................................................................

// <div className="registerContainer">

// <h1 > Crear Partido</h1>
// <Container className="formulario" > 

// <Form  onSubmit={newMatchSubmit}>
 

 
//  <FormGroup>
 
// <Label for="exampleEmail">
// Deporte
// </Label>
// <select name="deporte" onChange={onChangeInput}>
// {/* {idItem.map(item => {
// return <option key={item._id} value={idItem._id}> {item.deporte}</option>
// })} */}
// </select>
// </FormGroup>
// <FormGroup>
 
//  <Label for="exampleEmail">
//  jugadores
//  </Label>
 
//  <Input className="inputClass"
//  type="Number" name="jugadores" onChange={onChangeInput}
//  />
 
//  </FormGroup>

// <FormGroup>
// <Label for="examplePassword">
// Fecha
// </Label>
// <Input sm="2"
// type="Date" name="date" onChange={onChangeInput}
// />
// </FormGroup>
// <FormGroup>
// <Label for="exampleSelect">
// Hora
// </Label>
// <Input
// type="Number" name="hora" onChange={onChangeInput}
// />
// </FormGroup>
// <FormGroup>
// <Label for="exampleSelect">
// Lugar
// </Label>
// <select name="lugar" onChange={onChangeInput}>
// {/* {idLugar.map(iLugar => {
// return <option key={iLugar._id} value={iLugar._id}> {iLugar.nombre}</option>
// })} */}
// </select>
// </FormGroup>

// <FormGroup>
// <Label for="exampleSelect">
// Precio
// </Label>
// <Input
// type="Text" name="precio" onChange={onChangeInput}
// />
// </FormGroup>

// <FormGroup>
// <Label for="exampleSelect">
// Administrador
// </Label>

// <Input
// type="Text" name="usuario" onChange={onChangeInput} />

// </FormGroup>


// <div style={{display: successMessage? "block": "none"}}>{successMessage}</div>
// <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>



// <Button type="submit">
// Crear Partido
// </Button>
// </Form>
// </Container>
// </div>