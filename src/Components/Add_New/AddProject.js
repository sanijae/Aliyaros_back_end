import React, { useState } from 'react';
import { Form, Button, Container, Input, Label, TextBox, Title } from './Styles';
import { doc, setDoc } from 'firebase/firestore'
import { db,storage } from '../../APIS/Firebaseconfig';
import {ref, uploadBytes} from 'firebase/storage'
import { useNavigate } from 'react-router-dom';

export default function AddProjects() {
  const [data,setData] = useState({abstract:'',title:'',faculty:'',dept:'',numPage:'',file:''})
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
 
  const storageRef = ref(storage,`projects/${data.title}`)
  async function uploadData(e){
    e.preventDefault()
    try {
      setError('') 
      setMessage('')
      //await addDoc(collection(db,'projects'),{....})
      await setDoc(doc(db,'projects',data.title),{
        abstract:data.abstract,title:data.title,faculty:data.faculty,
        department:data.dept,pages:data.numPage,filename:data.file.name
      }).then(async()=>{
        await uploadBytes(storageRef,data.file).catch((error)=>alert(error.message))
        navigate('/')
        window.location.reload()
        setData({abstract:'',title:'',dept:'',numPage:'',file:'',faculty:''})
        setMessage('Succesfully uploaded')        
      }).catch(error=>setError('error failed to upload file'))
     // console.log(data);
    } catch (error) {
      setError('There is an error, make you fill all the above fields');
      console.log(error.message);
      setMessage('')      
    }
  }
  return (
    <Container>
     <Form onSubmit={uploadData}> 
      <Title>Create new Projects here</Title> 
      <TextBox>
        <Label>Abstract</Label>
        <Input as={'textarea'} rows={10} placeholder='Abstract' onChange={(e)=>setData({...data,abstract:e.target.value.toLowerCase()})} />
      </TextBox>
      <TextBox>
        <Label>Title</Label>
        <Input type={'text'} placeholder='Enter Title' onChange={(e)=>setData({...data,title:e.target.value.toLowerCase()})} />
      </TextBox>
      <TextBox>
        <Label>Faculty</Label>
        <Input type={'text'} placeholder='Enter Faculty' onChange={(e)=>setData({...data,faculty:e.target.value.toLowerCase()})} />
      </TextBox>
      <TextBox>
        <Label>Department</Label>
        <Input type={'text'} placeholder='Enter Department' onChange={(e)=>setData({...data,dept:e.target.value.toLowerCase()})} />
      </TextBox>
      <TextBox>
        <Label>Number of Pages</Label>
        <Input type={'text'} placeholder='Enter Pages' onChange={(e)=>setData({...data,numPage:e.target.value.toLowerCase()})} />
      </TextBox>
      <TextBox>
        <Label>Upload File(PDF,DOCX,ODT....)</Label>
        <Input type={'file'} onChange={(e)=>setData({...data,file:e.target.files[0]})} />
      </TextBox>
      {message && <Label style={{fontSize:'15px',color:'green'}}>{message}</Label>}
      {error && <Label style={{fontSize:'15px',color:'red'}}>{error}</Label>}
      <Button type='submit'>Submit new file</Button>
      </Form>
    </Container>
  );
}
