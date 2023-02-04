import styled from "styled-components";

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
`