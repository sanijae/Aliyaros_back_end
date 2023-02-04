import styled from 'styled-components'

export const Navbar = styled.nav`
width: 100% ;
margin:auto ; 
height:4em ;
background:#E6E90F ;
color: #fff;
align-items: center;
display: flex;
justify-content: space-between ;
position:relative ;
`
export const Navs = styled.ul`
display: flex;
align-items: flex-end;
list-style-type:none ;
padding-right:30px ;

@media screen and (max-width:600px){
    display: flex ;
    flex-direction: column ;
    background-color:#E6E90F ;
    top: 4em;
    right:0 ;
    width: 100% ;
    height:100vh ;
    align-items: center;
    position:absolute ;
    visibility: ${({show})=>(show ? 'visible' : 'hidden')};
    opacity: ${({show})=>(show ? 1:0)};
}
`
export const NavItems = styled.li`
list-style: none;
text-decoration:none ;
padding: 10px ;
cursor: pointer;
font-size:20px ;
:hover{
    background-color: #ffffff ;
    color: #E6E90F;
    font-weight: bold ;
}
:active{
    border:1px solid #ffffff ;
}
@media screen and (max-width:600px){
    padding: 20px;

    :hover{
    background-color: #ffffff ;
    color: #E6E90F;
    font-weight: bold ;
}
}
`
export const Hamburger = styled.div`
display: none;
border: none;
border-radius: 100%;
font-weight:bold ;
font-size:20px ;
padding:5px;
align-items: center ;
color: #fff ;
margin-left: 2em;
cursor: pointer;

@media screen and (max-width:600px){
    display: block;
}
`
export const Profile = styled.div`
margin-right:1em ;
align-items: center;
padding:10px ;
border-radius:2em ;
display:flex ;
justify-content:space-evenly ;
`
export const Avatar = styled.img`
border: none;
border-radius:50% ;
width: 40px;
height:40px ;
object-fit:cover ;
`
export const Title = styled.div`
align-items:center ;
font-size: 18px;
`