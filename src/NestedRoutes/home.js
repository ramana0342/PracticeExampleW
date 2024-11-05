import React from 'react';
import { useState } from 'react';
import { storeLoginData } from './redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Home() {
    const [loginInputData,setLoginInputData] = useState({Name:"",Email:"",Password:"",ConfirmPassword:""})
    const [findUser,setFindUser] = useState()
    const [userExistStatus,setUserExistStatus] = useState(null)
    const [passwordStatus,setPasswordStatus] = useState(true)

    let usersLoginData = useSelector((state)=>{
        return state.loginData
    })
   // console.log(usersLoginData)

    let dispatch = useDispatch()

    const handleChange=(field,value)=>{
          setLoginInputData((prev)=>({...prev,[field]:value}))

          if(field=="Email"){
            usersLoginData.find((user,index)=>{
                     if(value.toLowerCase()==user.Email.toLowerCase()){
                             // return user
                              setFindUser(user)
                            setUserExistStatus(true)
                     }else{
                        setUserExistStatus(false)
                        setFindUser()
                        
                     }
            })
          }

          if(field=="Password"){
            if(value==loginInputData.ConfirmPassword){
              setPasswordStatus(true) 
            }else{
       setPasswordStatus(false)
     }
          }

          if(field=="ConfirmPassword"){
               if(value==loginInputData.Password){
                        setPasswordStatus(true) 
               }else{
                 setPasswordStatus(false)
               }
          }
      

    }
    const handleSubmit=(e)=>{
      e.preventDefault()
         if(!findUser){
               if(loginInputData.Password==loginInputData.ConfirmPassword){
                dispatch(storeLoginData({Name:loginInputData.Name,Email:loginInputData.Email,Password:loginInputData.Password}))
                setLoginInputData({Name:"",Email:"",Password:"",ConfirmPassword:""})
                window.alert("User Register Successfully")
               }else{
                setPasswordStatus(true)
               }
         }else{
          setUserExistStatus(true)
         }
      
       
    }

    const emailExist=()=>{
          if(userExistStatus){
            return <p style={{color:"darkred"}}><b>Already User Exist</b></p>
          }else{
            return ""
          }
    }

    const paswordStatusFun = ()=>{
         if(!passwordStatus){
          return <p><b>Password Doesn't Match</b></p>
         }else{
            return ""
         }
    }



  return (<>
  <section id="SignUpSection">
    <div className='SignUpForm'>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Enter User Name</label>
                <input value={loginInputData.Name} type='text' placeholder='User Name' required onChange={(e)=>{handleChange("Name",e.target.value)}}/>
            </div> 
            <div>
                <label>Enter User Email</label>
                <input value={loginInputData.Email} type='email' placeholder='User Email' required onChange={(e)=>{handleChange("Email",e.target.value)}}/>
                {emailExist()}
            </div> 
            <div>
                <label>Create User Passowrd</label>
                <input value={loginInputData.Password} type='text' placeholder='Create Password' required onChange={(e)=>{handleChange("Password",e.target.value)}}/>
            </div> 
            <div>
                <label>Confirm User Password</label>
                <input value={loginInputData.ConfirmPassword} type='text' placeholder='Confirm Password' required onChange={(e)=>{handleChange("ConfirmPassword",e.target.value)}}/>
                {paswordStatusFun()}
            </div> 
            <div style={{textAlign:"center",marginTop:"20px"}}><button type='submit'>SignUp</button></div>
        </form>
    </div>
  </section>
  </>)
}

export default Home