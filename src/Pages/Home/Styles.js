import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items:center ;
width:100% ;
`
export const Row = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
width:100% ;
padding:10px ;
margin:5px auto ;

@media screen and (max-width:800px){
    flex-direction:column ;
}
`
export const Column = styled.div`
display: flex;
flex-direction:column ;
align-items:center ;
width:50% ;
padding:10px ;

@media screen and (max-width:700px){
    width:100% ;
}
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
font-size: 15px;
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