import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image = styledComponents.img`
width:100%;
height:100%;
object-fit:cover;`
const Info = styledComponents.div`
position:absolute;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
height:100%;
`
const Title = styledComponents.h1`
color:white;
margin:6px;
font-size:50px;
font-weight:lighter;`
const Button= styledComponents.button`
margin:20px;
padding:14 7px;
border:none;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600
`

const CategoryItem = ({item}) => {
  return (
    <Container>

       <Image  src={item.img}/>
       <Info>
           <Title>{item.title}</Title>
           <Button>Shop Now</Button>
       </Info>

    </Container>
  )
}

export default CategoryItem