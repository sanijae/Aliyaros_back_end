import React, { useState } from 'react';
import { Form, Button, Container, Input, Label, TextBox, Title } from '../Auth/AuthStyle';
import { sendPasswordResetEmail } from 'firebase/auth'
import { Auths } from '../../APIS/Firebaseconfig';

export default function ResetPassword() {
    const [userdata,setUserData] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
   async function uploadData(e){
      e.preventDefault()
      try {
        setMessage('')
        setError('')
        await sendPasswordResetEmail(Auths,userdata)
               .then((userCred)=>{
                 setMessage(`Verification Email has been sent to ${userdata} verify and Update your password`)
                 window.location.pathname = '/Auth'
                 console.log(userCred);
                 setUserData('')
                 setError('')
               })
               .catch((error)=>{
                setError('Invalid email make sure you provide the correct email address')
                setMessage('')
               })        
      } catch (error) {
        setError(error.message);
      }
    }
  return (
    <Container>
      <Form onSubmit={uploadData}>
        <Title>Admin password reset</Title>
        {message && <Label style={{color:'green',margin:'5px auto'}}>{message}</Label>}
        {error && <Label style={{color:'red',paddingTop:'10px'}}>{error}</Label>}
        <TextBox>
            <Label>Email</Label>
            <Input placeholder='Email' type={'email'} required onChange={(e)=>setUserData(e.target.value)} />
        </TextBox>
        <Label>Enter admin email and click button below to verify and reset admin password</Label>
        <Button type='submit'>Verify Email</Button>
      </Form>
    </Container>
  );
}
