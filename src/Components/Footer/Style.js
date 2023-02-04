import styled from 'styled-components';

export const FooterContainer = styled.div`
width:100% ;
background:#000 ;
color: #ffffff;
align-items: center;
display:flex ;
flex-direction:column ;
`
export const Text = styled.div`
font-size:15px ;
padding:10px ;
color:#fff;
`
export const LinkContainer = styled.div`
min-height:5em ;
width: 100%;
background-color:transparent ;
color: #fff;
text-align: center;
display:flex ;
margin:auto ;
overflow: hidden;
align-items:center ;
justify-content:space-evenly ;
`
export const ItemsLink = styled.div`
padding:10px ;
align-items:center ;
font-size:18px ;
cursor: pointer;

:hover{
    text-decoration: underline;
}
`
export const CopyContainer = styled.div`
display:flex ;
align-items:center ;
background-color:red ;
`
export const Copy = styled.div`
font-size: 17px;
padding:10px ;
align-items:center ;
`