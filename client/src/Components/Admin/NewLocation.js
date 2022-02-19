import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import "./NewLocation.css"


function NewLocation() {
  
  const role = localStorage.getItem('role')
  // console.log("role", role)
  const token = localStorage.getItem('firstLogin')

  const navigate = useNavigate()
  useEffect(()=>{
      if (role == 0) navigate('/')
  },[])

    const[ newLocation , setNewLocation] = useState(
        {
            nombre:"",
            deporte:"",
            precio:"",
            direccion:"",
            contacto:"",
        
}
    )

    const [idItem, setIdItem] = useState([])
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

    // const[user, setUser]= useState()

    const onChangeInput = (e) =>{
      const {name, value} = e.target;
      setNewLocation({...newLocation, [name]: value})
      }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)


//     useEffect(() => {
//       const getUser = async () => {
//           const response = await axios({
//               url:'http://localhost:5000/users/sportify-users/id', 
//               headers: {Authorization: localStorage.getItem("firstLogin")}
//           } 
//           )
          
//           setUser(response.data.userName.role);
         
//           console.log(response.data.userName.role)
//           };
//       getUser();
//   }, []);

    const newLocationSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "post" ,
                 url: '/locations/newLocation', 
                 data: {...newLocation},
                headers: {Authorization: localStorage.getItem("firstLogin"),  role: (localStorage.getItem("role"))},
               
            })
            
            setSuccessMessage(response.data.message)
            console.log(response.data.message)
            navigate("/HomeUser/NewLocationView")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }

       



    return (
      <div class="w-75 mx-auto mt-50 location-container">
        <h1> Crear Instalacion</h1>

        <form class="row g-3" onSubmit={newLocationSubmit}>
        
            
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
             Nombre
            </label>
            <input
              type="Text"
              name="nombre"
              onChange={onChangeInput}
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-l-4">
            <label for="inputEmail4" class="form-label">
              Deporte
            </label>

            <select
              class="form-select"
              name="deporte"
              onChange={onChangeInput}
              aria-label="Default select example"
            >
              <option selected>Selecciona el Deporte</option>
              {idItem.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.deporte}
                  </option>
                );
              })}
            </select>
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Precio
            </label>
            <input
              type="Text"
              name="precio"
              onChange={onChangeInput}
              class="form-control"
              id="inputAddress"
              placeholder=""
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
              type="Tel"
              name="contacto"
              onChange={onChangeInput}
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
         
          <div class="col-12  w-100 mx-auto">
            <button type="submit" class="btn btn-primary ">
              Crear Nueva Ubicacion
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
    );
}

export default NewLocation;