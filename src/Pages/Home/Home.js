import React from 'react';
import { Button, Column, Container, Image, Row, Text, Title } from './Styles';
import { useNavigate } from 'react-router-dom';
import { Auths } from '../../APIS/Firebaseconfig';

export default function Home() {
  const navigate = useNavigate()
  //console.log(Auths.currentUser.name);
  return (
    <Container>
      <Row>
        <Column>
          <Title>Projects</Title>
          <Text>Total Projects Uploaded  20000+</Text>
          <Text>Total Sell in last Month 1000+</Text>
          <Text>Total Sell in last six Month 17000+</Text>
          <Row>
            <Button onClick={()=>navigate('/Add')}>Upload New Project</Button>
            <Button onClick={()=>navigate('/Projects')}>Manage Project</Button>
          </Row>
        </Column>
        <Column>
         <Image alt='img' src={require('../../images/un1.jpg')} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Title>Proposals</Title>
          <Text>Total Proposals Uploaded  20000+</Text>
          <Text>Total Sell in last Month 1000+</Text>
          <Text>Total Sell in last six Month 17000+</Text>
          <Row>
            <Button onClick={()=>navigate('/Add')}>Upload New Proposals</Button>
            <Button onClick={()=>navigate('/Proposals')}>Manage Proposals</Button>
          </Row>
        </Column>
        <Column>
         <Image alt='img' src={require('../../images/un1.jpg')} />
        </Column>
      </Row>
      <Row>
        <Column>
          <Title>Topics</Title>
          <Text>Total Topics Uploaded  20000+</Text>
          <Text>Total Sell in last Month 1000+</Text>
          <Text>Total Sell in last six Month 17000+</Text>
          <Row>
            <Button onClick={()=>navigate('/Add')}>Upload New Topics</Button>
            <Button onClick={()=>navigate('/Topics')}>Manage Topics</Button>
          </Row>
        </Column>
        <Column>
         <Image alt='img' src={require('../../images/un1.jpg')} />
        </Column>
      </Row>
    </Container>
  );
}
