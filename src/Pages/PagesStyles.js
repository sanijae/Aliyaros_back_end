import styled from "styled-components";

export const Container = styled.div`
align-items:center ;
width:100% ;
text-align:left ;
display:flex ;
flex-direction:column ;
margin:auto ;
`
export const Row = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width:90% ;
padding:10px ;
background:rgba(0,0,0,.3) ;
`
export const Column = styled.div`
align-items:center ;
width:90% ;
padding:10px ;
background-color:rgba(0,0,0,.2) ;
cursor: pointer;
margin:5px auto ;
`
export const Image = styled.img`
max-width:100% ;
max-height:12em ;
border-radius: 1em;
object-fit: cover;
`
export const Title = styled.div`
font-size:20px ;
font-weight: bold;
align-items:center ;
padding: 10px;
`
export const Text = styled.div`
font-size:20px ;
align-items:center ;
padding: 10px;
`
export const Button = styled.button`
width:auto;
align-items: center;
font-size: 20px;
font-weight:bold ;
padding: 10px;
margin:5px auto ;
border:none ;
border-radius:2em ;
background-color:#e6e90f ;
color:#fff ;
cursor: pointer;

:hover{
    background-color:#fff ;
    color:#e6e90f ;
}
` 
// Loading Component

export const Loading = styled.div`
min-height:100vh ;
display:flex ;
flex-direction:column ;
justify-content:center ;
align-items: center;
`
export const ErrorMsg = styled.div`
font-size: 25px;
align-items: center;
letter-spacing:1px ;
padding:15px ;
margin:5px auto ;
`
export const Icon = styled.div`
margin:5px auto ;
align-items:center ;
font-size:20px ;
`
export const LImage = styled.img`
max-width:20em ;
border-radius:2em ;
object-fit:cover ;
`
