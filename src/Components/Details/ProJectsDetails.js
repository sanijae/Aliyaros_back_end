import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, TextSmall,Text, Title, Wrapper, Row, Button, ErrorMsg, Loading, Icon, Image } from './styles';
import { deleteDoc, doc, getDoc } from 'firebase/firestore'
import { db, storage } from '../../APIS/Firebaseconfig';
import styled from 'styled-components';
import { deleteObject, ref } from 'firebase/storage';


export default function ProjectsDetail() {
    const [file,setFile] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const [show,setShow] = useState(false)
    const params = useParams().title
    const storeRef = ref(storage,`projects/${params}`)

    useEffect(()=>{
        return(async()=>{
            try {
                const docRef = doc(db,'projects',`${params}`)
                const result = await getDoc(docRef)
                if (result.exists()){
                    setFile(result.data())
                }else{
                    setMessage('Opps, the file you are looking for does not exist or deleted')
                }
            } catch (error) {
                console.log(error.message);
            }
        })
    })
    async function deleteDocs(title) {
        try {
            await deleteDoc(doc(db,'projects',`${title}`))
            .then(async()=>{
                await deleteObject(storeRef).then(()=>window.location.pathname = '/Projects')
                .catch((error)=>setError(error.message))
            })
            .catch((error)=>setError(error.message))
        } catch (error) {
            setError(error.message)
        }
    }
    console.log(file);
  return (
    <Container>
      <Wrapper>
       {message ? <Loading>
          <Icon>
            <Image alt='Error Image' src={require('../../images/imgerror.png')} />
          </Icon>
          <ErrorMsg>{message}</ErrorMsg>
       </Loading> :
       <>
            <Title>{message}</Title>
            <Title>Title:&nbsp;{file?.title}</Title>
            <div style={{margin:'2em auto'}}>
                <Text>Abastract</Text>
                <Box>
                    <TextSmall>
                    {file?.abstract}
                    </TextSmall>
                </Box>
            </div>
            {error && <ErrorMsg style={{color:'red',fontSize:'16px'}}>{error}</ErrorMsg>}
            <Row>
                <Text>{file?.faculty}/{file?.department}</Text>
                <Text>{file?.pages}&nbsp;Pages</Text>
                <Button onClick={()=>setShow(!show)}>Delete</Button>
            </Row>
            <ModalMain show={show}>
              <ModalContent>
                <ModalHeader>
                    <Text>Are you sure want to delete</Text>
                </ModalHeader>
                <ModalFooter>
                   <Button style={{background:'black'}} onClick={()=>{
                        setShow(!show)
                    }}>No, Dont </Button>
                    <Button onClick={()=>{
                        deleteDocs(file?.title)
                        setShow(!show)
                    }}>Yes Delete it</Button>
                </ModalFooter>
              </ModalContent>
            </ModalMain>
        </>}
      </Wrapper>
    </Container>
  );
}






export const ModalMain = styled.div`
position: fixed;
left:0 ;
right:0 ;
top:0 ;
bottom: 0;
background: rgba(0,0,0,.5);
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items:center ;
opacity: ${({show})=>(show ? 1:0)};
visibility: ${({show})=>(show ? 'visible':'hidden')};
`
export const ModalContent = styled.div`
width: 500px ;
background:#fff ;

`
export const ModalHeader = styled.div`
padding:10px ;
margin:auto ;
`
export const ModalTitle = styled.div`
margin:0 ;
`
export const ModalBody = styled.div`
padding: 10px;
border-top: 1px solid #eee;
border-bottom:1px solid #eee;

`
export const ModalFooter = styled.div`
padding:10px ;
display:flex ;
justify-content:space-evenly ;
margin: 15px auto;
`