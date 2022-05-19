
import { Send } from '@mui/icons-material'
import React from 'react'
import styledComponents from 'styled-components'



const Container= styledComponents.div`
height:60vh;
background-color:white;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;




`
const Title= styledComponents.h1`
font-size:70px;
margin-bottom:20px;

`
const Description= styledComponents.p`
font-size:24px;
font-weight:lighter;

`



const InputContainer= styledComponents.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid grey;
border-radius:3%;


`
const Input= styledComponents.input`
border:none;
flex:8;
padding-left:20px;

`
const Button= styledComponents.button`
flex:1;
border:none;
background-color:teal;
color:white;

`

const Newsletter = () => {
  return (
    <Container>

          <Title>News Letter</Title>
          <Description>Stay updated with latest news!!!</Description>
          <InputContainer>
                    <Input placeholder='your email'/>
                    <Button>
                        <Send />    </Button>        
          </InputContainer>

    </Container>
  )
}

export default Newsletter