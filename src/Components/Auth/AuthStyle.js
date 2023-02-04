import styled from "styled-components";

export const Container = styled.div`
width:100% ;
display:flex ;
justify-content:center ;
text-align:center ;
`
export const Form = styled.form`
width:60% ;

@media screen and (max-width:800px){
    width: 90% ;
}
@media screen and (max-width:400px){
    width: 100% ;
}
`
export const Title = styled.div`
align-items:center ;
font-size:20px ;
font-weight:bold ;
letter-spacing:1.5px ;
`
export const TextBox = styled.div`
display:flex ;
flex-direction:column ;
text-align:left ;
margin:5px auto ;
`
export const Label = styled.label`
font-size:20px ;
align-items:center ;
padding:10px ;
`
export const Input = styled.input`
outline: none;
border: 1px solid #e6e90e ;
border-radius:2em ;
padding:20px ;
background:transparent ;

:focus{
    outline:none ;
}
`
export const Button = styled.button`
border:none ;
border-radius: 2em;
padding:20px ;
align-items:center ;
width:100% ;
margin:1em auto ;
font-size:20px ;
font-weight:bold ;
background:#e6e90e ;
color:#fff ;
cursor: pointer;

:hover{
    background-color: #fff;
    color: #e6e90e;
    border: 1px solid #e6e90e ;
}
`
export const Span = styled.span`
color:blue ;
font-size:20px ;
cursor: pointer;
text-decoration:underline ;
`