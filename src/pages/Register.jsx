import React from 'react'
import styledComponents from 'styled-components'

const Container=styledComponents.div`

width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://wallpapercave.com/wp/wp5683383.jpg") center;
display:flex;
align-items:center;
background-size:cover;
justify-content:center;

`
const Wrapper=styledComponents.div`
padding:20px;
width:40%;
background-color:white;




`
const Title=styledComponents.h1`
font-size:24px;
font-weight:300;
display:flex;
flex-wrap:wrap;


`
const Form =styledComponents.form``
const Input=styledComponents.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding:10px;`
const Agreement=styledComponents.p``
const Button=styledComponents.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer
`

const Register = () => {
  return (
    <Container>
        <Wrapper>

               <Title>
                   CREATE AN ACCOUNT
               </Title>
               <Form>
                   <Input placeholder="your name"></Input>
                   <Input placeholder="last name"></Input>
                   <Input placeholder="user name"></Input>
                   <Input placeholder="email"></Input>
                   <Input placeholder="password"></Input>
                   <Input placeholder="confirm password"></Input>

                   <Agreement>By creating my account i agree all <b>Terms and Conditions</b></Agreement>
                   <Button>Create</Button>
               </Form>

        </Wrapper>



        
    </Container>
  )
}

export default Register