import React, { useState } from 'react'
import '../CSS_files/Navbar.css'
import {useDispatch} from 'react-redux'


import {NavLink} from 'react-router-dom'
import { add } from '../Redux/action'
import { useEffect } from 'react'
// import{GlobalData} from './App'
const Navbar = () => {
    const[light,dark]=useState(false);
    const[msg,SetMsg]=useState("")
  const dispatch=useDispatch()
//   const obj={
//     name:'rushi',
//     age:24

//   }
// const{light,dark,SetMsg}=useContext(GlobalData)
useEffect(()=>{
      dispatch(add(light))
    
    },[])
    function ChangeTheme(){
        // alert('hello')
        dark(!light)
        SetMsg(<h3>You have changed theme to <span style={{fontSize:'2rem',fontWeight:'900'}}>{light===false? 'dark':'light'}</span></h3>)
        // console.log(light);

    }

    const borderbox={
        color:light===false?'blue':'yellow'
    }
  return (


   <>
    <div style={{boxShadow:`10px 10px 25px ${borderbox.color}`}} className='Navbar'>

        <h1>GeekSter</h1>
        <ul >
            <NavLink to={'/home'}>
            <li style={{color:light===false?"black":"white"}} >Home</li>
            </NavLink>
            <NavLink to={'/about'}>
            <li style={{color:light===false?"black":"white"}}>About</li>
            </NavLink>
            <NavLink to={'/contact'}>
            <li style={{color:light===false?"black":"white"}}>Contact</li>
            </NavLink>
        </ul>
        <button style={{color:light===false?"white":"black",background:light===false?"black":"white"}}
         onClick={()=>{
            ChangeTheme()
            dispatch(add(light))
           
         }}>Change Theme to {light===false?'Dark':'Light'}</button>
    </div>
   </>
  )
}

export default Navbar