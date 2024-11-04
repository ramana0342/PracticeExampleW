import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Login() {

    const [loginInputData,setLoginInputData] = useState({Email:"",Password:""})
    const [emailStatus,setemailStatus] = useState(null)
    const [passwordStatus,setPasswordStatus] = useState(null)
    const [userCrediantial ,setUserCrediantials] = useState()
    const [loginStatus,setLoginStatus] = useState(false)
    const navigate=useNavigate()

    let usersLoginData = useSelector((state)=>{
        return state.loginData
    })
    //console.log(usersLoginData)


    console.log(userCrediantial)
    const handleChange=(field,value)=>{
        setLoginStatus(false)
        setLoginInputData((prev)=>({...prev,[field]:value}))
          
          if(field=="Email"){
             let UserLoginData = usersLoginData.find((userData,index)=>{
                if(value.toLowerCase()==userData.Email.toLowerCase()){
                   setemailStatus(true)
                     setUserCrediantials(userData)
            }else{
                setemailStatus(false)
               // console.log(false)
                setUserCrediantials()
               setPasswordStatus(null)
               setLoginInputData({[field]:value,Password:""})
            }
          })
        } 
        

        if(field=="Password"){
          if(userCrediantial){
            
                  if(userCrediantial.Password==value){
                      setPasswordStatus(true)
                      setLoginStatus(true)
                   
                  }else{
                    setPasswordStatus(false)
                  }
            }else{
                setPasswordStatus(null)
            }
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setLoginInputData({Email:"",Password:""})
        window.alert("Login Successfully")
        navigate("/afterLogin")
    }

    const emailFun=()=>{
        if(loginInputData.Email!=="" && emailStatus===true){
            return <p style={{color:"darkgreen"}}><b>Email Exists ,Please enter your password</b></p>
        }
        else if(loginInputData.Email!=="" && emailStatus===false){
            return <p style={{color:"darkred"}}><b>No User Find</b></p>
        }
        return ""
    }

    const passwordFun=()=>{
        if(loginInputData.Password!=="" && passwordStatus===true){
            return <p style={{color:"darkgreen"}}><b>Valid Password</b></p>
        }
        else if(loginInputData.Password!=="" && passwordStatus===false){
            return <p style={{color:"darkred"}}><b>Invalid Password</b></p>
        }
        return ""
    }

    const btnStatus =()=>{
        if(loginStatus){
            return <button class="btn btn-primary" type='submit'>SignIn</button>
        }else{
            return <button style={{marginTop:"8px"}} type="button" class="btn btn-secondary" disabled>SignIn</button>
        }
    }



    



    return(<>
    <section id="loginSection">
    <div className='loginForm'>
        <form onSubmit={handleSubmit}>
           
            <div>
                <label>Enter User Email</label>
                <input value={loginInputData.Email} type='email' placeholder='User Email' required onChange={(e)=>{handleChange("Email",e.target.value)}}/>
                { emailFun()}
            </div> 
            <div>
                <label>Enter User Passowrd</label>
                <input value={loginInputData.Password} type='text' placeholder='User Password' required onChange={(e)=>{handleChange("Password",e.target.value)}}/>
                {passwordFun()}
            </div> 
           
            <div style={{textAlign:"center"}}>{btnStatus()}</div>
        </form>
    </div>
  </section>
    </>)
  
}

export default Login