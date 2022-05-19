
import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styledComponents from 'styled-components'
import Announcements from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container=styledComponents.div``
const Wrapper=styledComponents.div`
padding:20px;
`
const Title=styledComponents.h1`
font-weight:300;
text-align:center;
`
const Top=styledComponents.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;

`

const TopButton= styledComponents.button`
paddinhg:10px;
font-weight:600;
cursor:pointer;
border: ${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
color: ${(props)=>props.type === "filled" && "white"}`;

const TopTexts= styledComponents.div``

const TopText =styledComponents.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
`

const Bottom=styledComponents.div`
display:flex;
jsutify-content:space-between;`
const Info=styledComponents.div`
flex:3;
`

const Product =styledComponents.div`
display:flex;
justify-content:space-between;`
const ProductDetail =styledComponents.div`
flex:2;
display:flex;`
const Image =styledComponents.img`
width:200px;`
const Deatails =styledComponents.div`
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-around;

`
const ProductName =styledComponents.span``
const ProductId =styledComponents.span``
const ProductColor =styledComponents.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${(props)=>props.color}

`
const ProductSize =styledComponents.span``

const PriceDetail =styledComponents.div`
flex:1;
display:flex;
flex-direction:column;

align-items:center;
justify-content:center;


`
const ProductAmountContainer = styledComponents.div`
display:flex;
align-items:center;
margin-bottom:20px
`
const ProductAmount = styledComponents.div`
font-size:24px;
margin:5px;
`
const ProductPrice = styledComponents.div`
font-size:40px;
font-weight:200;`

const Hr = styledComponents.hr`
background-color:white;

height:1px;`



const Summary=styledComponents.div`
flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;

`


const SummaryTitle=styledComponents.h1`
font-weight:200;`
const SummaryItem=styledComponents.div`
margin:30px 0px;
display:flex;
justify-content:space-between;
font-weight:${(props)=>props.type === "total" && "500"};
font-size:${(props)=>props.type === "total" && "24px"}


`
const SummaryItemText=styledComponents.span``
const SummaryItemPrice=styledComponents.span``
const Button =styledComponents.button`

width:100%;
padding:10px;
background-color:black;
color:white;
font-weight:600`

const Cart = () => {
  return (
    <Container>
        <Announcements />
           <Navbar />
           <Wrapper>
               <Title>Your Bag</Title>
                  <Top>

                      <TopButton>Continue Shopping</TopButton>
                      <TopTexts>
                          <TopText>Shopping bag(2)</TopText>
                          <TopText>Your Wishlist</TopText>
                      </TopTexts>
                      <TopButton  type="filled">Checkout now</TopButton>
                  </Top>




                  <Bottom>

                      <Info>
                          <Product>

                              <ProductDetail>
                                 <Image src="https://tse1.mm.bing.net/th?id=OIP.rz0l0S9fng0FguWZbz_xfAHaHa&pid=Api&P=0&w=164&h=164" />

                                 <Deatails>
                                     <ProductName><b>Product:</b>
                                         Super Shoes
                                     </ProductName>
                                     <ProductId><b>Product id:</b>
                                         2302
                                     </ProductId>
                                     
                                     <ProductColor color='black'/>

                                     <ProductSize><b>Size:</b>
                                        37
                                     </ProductSize>
                                 </Deatails>

                              </ProductDetail>
                              <PriceDetail>
                                   <ProductAmountContainer>
                                        <Add />
                                           <ProductAmount>
                                               2
                                           </ProductAmount>
                                        <Remove />

                                   </ProductAmountContainer>
                                   <ProductPrice>$ 20</ProductPrice>


                              </PriceDetail>
                          </Product>
                          <Hr />
                          <Product>

                              <ProductDetail>
                                 <Image src="https://tse1.mm.bing.net/th?id=OIP.rz0l0S9fng0FguWZbz_xfAHaHa&pid=Api&P=0&w=164&h=164" />

                                 <Deatails>
                                     <ProductName><b>Product:</b>
                                         Super Shoes
                                     </ProductName>
                                     <ProductId><b>Product id:</b>
                                         2302
                                     </ProductId>
                                     
                                     <ProductColor color='black'/>

                                     <ProductSize><b>Size:</b>
                                        37
                                     </ProductSize>
                                 </Deatails>

                              </ProductDetail>
                              <PriceDetail>
                                   <ProductAmountContainer>
                                        <Add />
                                           <ProductAmount>
                                               2
                                           </ProductAmount>
                                        <Remove />

                                   </ProductAmountContainer>
                                   <ProductPrice>$ 20</ProductPrice>


                              </PriceDetail>
                          </Product>
                      </Info>
                      <Summary>
                          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                          <SummaryItem>
                              <SummaryItemText>Subtotal</SummaryItemText>
                              <SummaryItemPrice>$ 40</SummaryItemPrice>
                          </SummaryItem>
                          <SummaryItem>
                              <SummaryItemText>Estimated Shipping</SummaryItemText>
                              <SummaryItemPrice>$ 5</SummaryItemPrice>
                          </SummaryItem>
                          <SummaryItem type="total">
                              <SummaryItemText >Shipping Discount -$5</SummaryItemText>
                              <SummaryItemPrice>$ 40</SummaryItemPrice>
                          </SummaryItem>

                          <Button>Checkout</Button>

                      </Summary>
                  </Bottom>


           </Wrapper>
           <Footer />



    </Container>
  )
}

export default Cart