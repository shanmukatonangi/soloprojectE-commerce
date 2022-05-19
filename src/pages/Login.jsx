import React from 'react'
import styledComponents from 'styled-components'

const Container=styledComponents.div`

width:100vw;
height:100vh;
background:linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://wallpapercave.com/wp/wp4443741.jpg") center;
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
const Form =styledComponents.form`
display:flex;
flex-direction:column;
`
const Input=styledComponents.input`
flex:1;
min-width:40%;
margin: 10px 0px;
padding:10px;`

const Button=styledComponents.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;


color:white;
margin-top:10px;
cursor:pointer
`

const Link = styledComponents.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer;
`

const Login = () => {
  return (
    <Container><Wrapper>

    <Title>
        Sign-In
    </Title>
    <Form>
        <Input placeholder="username"></Input>
        
        
        <Input placeholder="password"></Input>
        

        
        <Button>Sign-In</Button>
        <Link>Forgot password?</Link>
        <Link>Create a new account?</Link>

    </Form>

</Wrapper>




    </Container>
  )
}

export default Login