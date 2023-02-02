import React from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
const Container=styled.div`
  height:70px;
  background-color:lightblue;
`
const Wrapper=styled.div`
  padding:1px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;

`
const Left=styled.div`
 flex:1;
 display:flex;
 align-items: center;
 margin-bottom:10px;`
const Center=styled.div`  
  text-align:center; 
`
const Right=styled.div`

  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;`
const Language=styled.span`
  font-size:15px;
  cursor:pointer;`
const Logo=styled.h1`
 font-weight:bold;`
const MenuItem=styled.div`
 font-size:19px;
 font-weight:bold;
 cursor:pointer;
 margin-left:54px;`
 
const Navbar = () => {
  return (
     <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>      
        </Left>
        <Center><Logo>Shopzy</Logo></Center>
        <Right>
        <MenuItem>SIGNIN</MenuItem>
        <MenuItem>
          <Badge badgeContent={1} color="primary"><ShoppingCartOutlinedIcon/></Badge></MenuItem>
        </Right>
      </Wrapper>
     </Container>
  )
}

export default Navbar;