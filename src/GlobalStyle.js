import styled ,{createGlobalStyle} from 'styled-components'

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    background-color:transparent ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const MainSection = styled.div`
background: blue; //rgba(0,0,0,.3);
width:100% ;
display:flex ;
flex-direction:column ;
justify-content:stretch ;
`
export const Body = styled.div`
width:80% ;
background-color:#fff ;
padding:20px ;
margin:auto ;
`