import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
height:60px;

@media only screen and (max-width:380px)
{
  display:none;
}


`
const Left= styledComponents.div`
flex:1;
display:flex;
align-items:center;`
const Language= styledComponents.span`
font-size:14px;
cursor:pointer;`

const SearchContainer = styledComponents.div`
border : 1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:6px;`

const Input=styledComponents.input`
border:none;
`

const Center= styledComponents.div`
flex:1;
text-align:center;`

const Logo = styledComponents.h1`
font-weight:bold;`
const Right= styledComponents.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`

const MenuItem=styledComponents.div`
font-size:14px;
cursor:pointer;
margin-left:25px;`

const Wrapper = styledComponents.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
        
        <Left><Language>
            en</Language>
            <SearchContainer>
              <Input />
              <Search style={{color:"gray", fontSize:16}}/>
              </SearchContainer></Left>

        <Center><Logo>Shanmukh.</Logo></Center>
        <Right>
          <MenuItem>
          Register</MenuItem>
          <MenuItem>
          Sign-In</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
      <ShoppingCartOutlined />
    </Badge>
          </MenuItem>
        </Right>

        </Wrapper>


    </Container>
  )
}

export default Navbar