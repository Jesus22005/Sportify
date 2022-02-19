import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import axios from "axios"
import "./Login.css"


function Login() {
  
    const Navigate = useNavigate();
    const[ login , setLogin]= useState(
        { 
        email:"",
        clave:""
}
    )
  

    // const [user, setUser] = useState({});
    // useEffect(() => {
    //     const getUser = async () => {
    //         const response = await axios({
    //             url:'http://localhost:5000/users/sportify-users/id', 
    //             headers: {Authorization: localStorage.getItem("firstLogin")}

    //         } 
    //         )
            
    //         setUser(response.data.userName.role);
    //         console.log(response)
    //         };
    //     getUser();
    // }, []);
    



    const onChangeInput = (e) =>{
        const {name, value} = e.target;
        setLogin({...login, [name]: value})
        }

    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    

    const loginSubmit = async e =>{
    e.preventDefault()
    try {
            const response =  await axios.post("/users/login", {...login})
        
            localStorage.setItem("firstLogin", response.data.accessToken)
            localStorage.setItem("role", response.data.role)

            console.log(response.data.role)
             setSuccessMessage(response.data.message)
             Navigate("/HomeUser/MainHomeUser")
            } catch (error) {
                setErrorMessage(error.response.data.message)
            }

  
        }

      
    return (


  <body>
 <div class="w-75 mx-auto mt-50-login container-login">
<h1 class="h1-login">Login</h1>
    <container class="p-3 mx-auto">
    <form onSubmit={loginSubmit}>
<div class="mb-3 row">
<label for="inputPassword" class="col-sm-2 col-form-label">Correo Electronico</label>
    <div class="col-sm-10">
      <input type="email" name="email" autocomplete="off" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
    <div class="col-sm-10">
      <input type="password" autocomplete="off" name="clave" onChange={onChangeInput} class="form-control" id="inputPassword"/>
    </div>
  </div>
  
     <button type="submit" class="mx-auto centrar-login" onChange={loginSubmit}> Entrar </button>
  </form>

  <div class="mt-50 mb-50 mb50-login" style={{display: successMessage? "block": "none"}}></div>
           <div style={{display: errorMessage? "block": "none"}}>{errorMessage}</div>
  </container>
</div> 
</body>



    
    
  );
}

export default Login;