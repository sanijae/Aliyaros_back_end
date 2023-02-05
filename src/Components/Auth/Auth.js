import React, { useState } from 'react';
import { Form, Button, Container, Input, Label, Span, TextBox, Title } from './AuthStyle';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Auths } from '../../APIS/Firebaseconfig';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
    const [userdata,setUserData] = useState({email:'',password:''})
    const navigate = useNavigate()

   async function uploadData(e){
      e.preventDefault()
      try {
        await signInWithEmailAndPassword(Auths,userdata.email,userdata.password)
               .then((usercred)=>{
                 const user = usercred.user
                 localStorage.setItem('user',user.accessToken)
                 //window.location.pathname ='/'
                 setUserData({email:'',password:''})
                 navigate('/')
               })
               .catch((error)=>{
                alert('Forebase Error: ',error.message);
               })        
      } catch (error) {
        console.log(error.message);
      }
    }
  return (
    <Container>
      <Form onSubmit={uploadData}>
        <Title>Sign in to admin account</Title>
        <TextBox>
            <Label>Email</Label>
            <Input placeholder='Email' type={'email'} required onChange={(e)=>setUserData({...userdata,email:e.target.value})} />
        </TextBox>
        <TextBox>
            <Label>Password</Label>
            <Input placeholder='Password' type={'password'} required onChange={(e)=>setUserData({...userdata,password:e.target.value})} />
            <Span style={{textAlign:'right',paddingRight:'10px'}}
            onClick={()=>navigate('ResetPassword')}>Forgot Password</Span>
        </TextBox>
        <Button type='submit'>Sign In</Button>
      </Form>
    </Container>
  );
}
