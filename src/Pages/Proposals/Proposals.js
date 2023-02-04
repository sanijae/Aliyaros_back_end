import React, { useEffect, useState } from 'react';
import { Column, Container,Row,Button, Text,Icon, Title,Loading,ErrorMsg,LImage } from '../PagesStyles';
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './../../APIS/Firebaseconfig';
 
export default function Proposals() {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

 useEffect(()=>{
  return (async()=>{
    try {
      setLoading(true)
      const result =await getDocs(collection(db,'proposals'))
      setData(result.docs.map(rs=>rs.data()));
      setLoading(false)      
    } catch (error) {
      console.log(error.message);
      setLoading(true)
    }
 })
},[])

  return (
    <Container>
      <Row>
        <Title>Proposals</Title>
        <div>
        <Button onClick={()=>navigate('/AddProposal')}>Add New Projects</Button>
        </div>
      </Row>
      {loading ? 
      <Loading>
      <Icon>
        <LImage alt='Error Image' src={require('../../images/imgLoading.png')} />
      </Icon>
      <ErrorMsg> Fetching Data Please wait</ErrorMsg>
      </Loading> 
      : data.length === 0? <Loading>
        <ErrorMsg> No file to display click above button to upload some</ErrorMsg>
      </Loading>
      : data.map((dt,i)=>{
        return (
          <Column onClick={()=>navigate(`/ProposalDetail/${dt.title}`)}>
            <Title>
              {dt.title}
            </Title>
            <Row style={{background:'transparent'}}>
            <Text>{dt.faculty}/{dt.department}</Text>
            <Text>{dt.pages} Pages</Text>
            </Row>
          </Column>
            )
          })}
    </Container>
  );
}
