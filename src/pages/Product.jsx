import { Add, Remove } from '@mui/icons-material'
import React from 'react'

import styledComponents from 'styled-components'
import Announcements from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container=styledComponents.div``
const Wrapper=styledComponents.div`
padding:50px;
display:flex;`
const ImageContainer=styledComponents.div`
flex:1;`
const Image=styledComponents.img`
width:100%;
height:90vh;
object-fit:cover;`
const InfoContainer=styledComponents.div` flex:1;
padding: 0px 50px`
const Title=styledComponents.h1`
font-weight:200;`
const Desc=styledComponents.p`
margin:20px 0px;
`
const Price=styledComponents.h3`
font-weight:100;
font-size:40px;
`

const FilterContainer=styledComponents.div`
width:50%;
margin: 20px 0px;
display:flex;
justify-content:space-between;
`
const Filter=styledComponents.div`
display:flex;
align-items:center;

`
const FilterTitle=styledComponents.span`font-size:20px;
font-weight:200;`
const FilterColor=styledComponents.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer;
`
const FilterSize=styledComponents.select`

margin-left:10px;
padding:5px;
`
const FilterSizeOption=styledComponents.option``

const AddContainer=styledComponents.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`
const AmountContainer=styledComponents.div`
display:flex;
align-items:center;
font-weight:700;

`
const Amount=styledComponents.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;

align-items:center;
justify-content:center;
margin:5px;
`
const Button=styledComponents.button`
padding:15px;
border:2px solid teal;
border-radius:10px;
background-color:white;
cursor:pointer;
font-weight:500;
 &:hover{
     background-color:teal;
     border-radius:2px solid white;
     color:white;
     
 }
`



const Product = () => {
  return (
    <Container>
        <Announcements />
        <Navbar />

           <Wrapper>
               <ImageContainer>
                   <Image src={"https://i.ibb.co/S6qMxwr/jean.jpg"}/>

                   
               </ImageContainer>
<InfoContainer>
    <Title>
Denim Jump Suit
    </Title>
    <Desc>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ea perferendis totam, quibusdam, adipisci tenetur reprehenderit aperiam eaque accusamus consectetur repudiandae cum necessitatibus eum dolorum sapiente eligendi, officia assumenda labore.
    </Desc>
    <Price>$ 20</Price>
    <FilterContainer>
        <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="black" />
            <FilterColor color="darkblue" />
            <FilterColor color="gray" />
        </Filter>

        <Filter>
            <FilterTitle>Size</FilterTitle>
            <FilterSize>
                <FilterSizeOption>
                    Xs
                </FilterSizeOption>
                <FilterSizeOption>
                    Xl
                </FilterSizeOption>
                <FilterSizeOption>
                    Xx1
                </FilterSizeOption>
                <FilterSizeOption>
                    Xxx1
                </FilterSizeOption>
                <FilterSizeOption>
                    M
                </FilterSizeOption>
                <FilterSizeOption>
                    S
                </FilterSizeOption>
            </FilterSize>
        </Filter>
    </FilterContainer>
<AddContainer>
    <AmountContainer>
        <Remove />
        <Amount>1</Amount>
        <Add />
    </AmountContainer>
    <Button>Add to cart</Button>
</AddContainer>


</InfoContainer>

           </Wrapper>

        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Product