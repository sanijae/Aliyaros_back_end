import React, { useState } from 'react';
import { Form, Button, Container, Input, Label, TextBox, Title } from './AuthStyle';
import { createUserWithEmailAndPassword } from 'firebase/auth'
//import {  ref } from 'firebase/storage'
import { Auths } from '../../APIS/Firebaseconfig';


export default function AddUser() {
    const [userdata,setUserData] = useState({name:'',file:'',email:'',password:'',Cpassword:''})
    const [error,setError] = useState('')
   // const storeRef = ref(storage,`${userdata.email}/${userdata.file.name}`)
    
   async function uploadData(e){    
      e.preventDefault()
      try {
        if(userdata.password === userdata.Cpassword){
        await createUserWithEmailAndPassword(Auths,userdata.email,userdata.password)
               .then(async(usercred)=>{
                // await uploadBytes(storeRef,userdata.file)
                // .then((async(url)=>{
                //   await getDownloadURL(storeRef,userdata.file).then((res)=>{
                //     setAvatar(res);                    
                //   })                    
                // }))
                // const user = usercred.user
                // user.displayName = userdata.name
                // user.photoURL = avatar
                // console.log(user,avatar);
                 setUserData({email:'',password:''})
                 window.location.pathname ='/'
               })
               .catch((error)=>{
                setError(error.message);
               })
          }else{
           setError('Password do not match, please check it')
          }        
      } catch (error) {
        setError(error.message);
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
        </TextBox>
        <TextBox>
            <Label>Confirm Password</Label>
            <Input placeholder='Confirm Password' type={'password'} required onChange={(e)=>setUserData({...userdata,Cpassword:e.target.value})} />            
        </TextBox>
        {error && <div style={{color:'red',textAlign:'center',margin:'10px auto',padding:'10px'}}> {error} </div>}
        <Button type='submit'>Sign up</Button>
      </Form>
    </Container>
  );
}
