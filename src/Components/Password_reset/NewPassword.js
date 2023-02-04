import React, { useState } from 'react';
import { Form, Button, Container, Input, Label, TextBox, Title } from '../Auth/AuthStyle';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Auths } from '../../APIS/Firebaseconfig';

export default function NewPassword() {
    const [userdata,setUserData] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    //console.log(localStorage.getItem('uEmail'));
   async function uploadData(e){
      e.preventDefault()
      try {
        setMessage('')
        setError('')
        await createUserWithEmailAndPassword(Auths,localStorage.getItem('uEmail'),userdata)
               .then(()=>{
                window.location.pathname = '/Auth'
                localStorage.removeItem('uEmail')
                setMessage('') 
                setUserData('')
                 setError('')
               })
               .catch((error)=>{
                setError(error.message)
                console.log(Auths.currentUser);
                setMessage('')
               })        
      } catch (error) {
        setError(error.message);
      }
    }
  return (
    <Container>
      <Form onSubmit={uploadData}>
        <Title> Create new admin password </Title>
        {message && <Label style={{color:'green',margin:'5px auto'}}>{message}</Label>}
        {error && <Label style={{color:'red',paddingTop:'10px'}}>{error}</Label>}
        <TextBox>
            <Label>Password</Label>
            <Input placeholder='Password' type={'password'} required onChange={(e)=>setUserData(e.target.value)} />
        </TextBox>
        <Button type='submit'>Save Password</Button>
      </Form>
    </Container>
  );
}
