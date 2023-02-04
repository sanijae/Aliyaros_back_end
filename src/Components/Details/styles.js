import styled from "styled-components";

export const Container = styled.div`
width:100% ;
display: flex;
justify-content:center ;
align-items:center ;
background:transparent ;
`
export const Wrapper = styled.div`
width:80% ;
padding:10px ;
background:#fff ;
color:#000 ;
`
export const Box = styled.div`
 padding:20px ;
 border:2px solid #e6e90f ;
 border-radius:1em ;
 max-height:20em ;
 overflow:scroll ;
`
export const Title = styled.div`
font-size:20px ;
font-weight:bold ;
letter-spacing:1.5px ;
align-items: center;
`
export const Text = styled.div`
align-items:center ;
font-size:18px ;
font-weight:bold ;
letter-spacing:1px ;
`
export const TextSmall = styled.div`
align-items:center ;
font-size:17px ;
letter-spacing:1px ;
`
export const Row = styled.div`
display:flex ;
justify-content:space-between ;
align-items:center ;
background:rgba(0,0,0,.3) ;
padding:20px ;
`
export const Button = styled.button`
align-items:center ;
padding:10px ;
border: none;
border-radius:2em ;
font-size:20px ;
cursor: pointer;
background:red ;
color: #ffffff;

:hover{
    background:#ffffff ;
    color:#e6e90f ;
    border: 1px solid #e6e90f;
}
`
export const Loading = styled.div`
width: 100%;
min-height:100vh ;
background:rgba(0,0,0,.2) ;
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
export const Image = styled.img`
max-width:20em ;
border-radius:2em ;
object-fit:cover ;
`
