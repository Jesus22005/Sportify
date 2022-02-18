import {useEffect, useState} from "react"
import axios from "axios"
import {Routes, Route, Link, useNavigate} from "react-router-dom"
import {Form, FormGroup, Label, Input, FormText, Button, Container, Col , Row} from "reactstrap";



function NewSports() {
  
  const role = localStorage.getItem('role')
  // console.log("role", role)
  const token = localStorage.getItem('firstLogin')

  const navigate = useNavigate()
  useEffect(()=>{
      if (role == 0) navigate('/')
  },[])

    const[ newSport , setNewSport] = useState(
        {
            deporte:"",
        equipacion:"",
        
}
    )

    const[user, setUser]= useState()

    const onChangeInput = (e) =>{
      const {name, value} = e.target;
      setNewSport({...newSport, [name]: value})
      }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)


    useEffect(() => {
      const getUser = async () => {
          const response = await axios({
              url:'http://localhost:5000/users/sportify-users/id', 
              headers: {Authorization: localStorage.getItem("firstLogin")}
          } 
          )
          
          setUser(response.data.userName.role);
         
          console.log(response.data.userName.role)
          };
      getUser();
  }, []);

    const newSportSubmit = async e =>{
    e.preventDefault()
    try {
       
            const response = await axios({
                method: "post" ,
                 url: 'http://localhost:5000/sports/newSport', 
                 data: {...newSport},
                headers: {Authorization: localStorage.getItem("firstLogin"),  role: (localStorage.getItem("role"))},
               
            })
            
            setSuccessMessage(response.data.message)
            console.log(response.data.message)
            navigate("/HomeUser/NewSportView")
            }
            
            catch (error) {
                setErrorMessage(error.response.data.message)
            }
        
        }

       



    return (
      <div class="w-75 mx-auto mt-50">
        <h1> Crear Deporte</h1>

        <form class="row g-3" onSubmit={newSportSubmit}>
        
            
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Deporte
            </label>
            <input
              type="Text"
              name="deporte"
              onChange={onChangeInput}
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Equipacion
            </label>
            <input
              type="Text"
              name="equipacion"
              onChange={onChangeInput}
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>
         
          <div class="col-12  w-100 mx-auto">
            <button type="submit" class="btn btn-primary ">
              Crear Nuevo Deporte
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

export default NewSports;