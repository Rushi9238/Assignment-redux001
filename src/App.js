import './App.css';
import React, { useState } from 'react'

import { Routes,Route } from 'react-router-dom';
import Home from './Componets/Home'
import About from './Componets/About'
import Contact from './Componets/Contact'
import Navbar from './Componets/Navbar'
import { useSelector } from 'react-redux';

function App() {
  // const obj={
  //   name:'rushi',
  //   age:24
  // }
  const selectore=useSelector((store)=>store.dataAdd)
  //  return store
  
    // return(store.dataAdd);
    

  
  return (
    <div style={{background:selectore[0]===false? 'orange':'white'}} className="App">
      {/* {console.log(selectore)} */}
     {/* <button onClick={()=>dispatch(add(obj))}>click</button> */}
     <Navbar/>
    <div style={{margin:'1rem',textAlign:'center'}}></div>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
    </div>
  );
}

export default App;
