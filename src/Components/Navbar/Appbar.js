import React, { useState } from 'react';
import { Hamburger, Navbar, NavItems, Navs, Profile, Title } from './styles';
import {MdMenu,MdClose} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { Auths } from '../../APIS/Firebaseconfig';

export default function Appbar() {
    const [show,setshow] = useState(false)
    const navigate = useNavigate()
    const user = localStorage.getItem('user')
  
  function signOuts(){
    try {
       signOut(Auths).then(()=>{
        localStorage.removeItem('user')
        window.location.reload()
       })
       .catch(error=>alert(error.message))
    } catch (error) {
      alert(error.message)
    } 
  }
  return ( 
    <Navbar>
       <Hamburger onClick={()=>setshow(!show)}>
          {show ? <MdClose size={'1.5em'}/>:<MdMenu size={'1.5em'}/>}
        </Hamburger>
        <Navs show={show} onClick={()=>setshow(!show)}>
            <Link to='/' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Aliyaros limited</NavItems>
            </Link>
            <Link to='/Projects' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Projects</NavItems>
            </Link>
            <Link to='/Proposals' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Proposals</NavItems>
            </Link>
            <Link to='/Topics' style={{listStyle:'none',textDecoration:'none',color:'inherit'}}>
              <NavItems>Topics</NavItems>
            </Link>
        </Navs>        
      {user &&  <Profile>
          <div>
          <Title style={{textDecoration:'underline',cursor:'pointer',color:'rgba(0,0,0,.6)',fontWeight:'bold'}}
          onClick={signOuts}>Sign out</Title>
          </div>
          <Title style={{cursor:'pointer',color:'#fff',fontWeight:'bold',paddingLeft:'5px'}} onClick={()=>navigate('/AddUser')} >Add User</Title>          
        </Profile>}
    </Navbar>
  );
}
