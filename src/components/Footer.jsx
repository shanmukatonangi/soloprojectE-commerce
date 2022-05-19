import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from '@mui/icons-material';
  import styledComponents from 'styled-components';
  
  
  const Container =styledComponents.div`
  display:flex;
  



  
  `
  
  const Left = styledComponents.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styledComponents.h1``;
  
  const Desc = styledComponents.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styledComponents.div`
    display: flex;
  `;
  
  const SocialIcon = styledComponents.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styledComponents.div`
    flex: 1;
    padding: 20px;
   
  `;
  
  const Title = styledComponents.h3`
    margin-bottom: 30px;
  `;
  
  const List = styledComponents.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styledComponents.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styledComponents.div`
    flex: 1;
    padding: 20px;
    
  `;
  
  const ContactItem = styledComponents.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styledComponents.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>Shanmukh.</Logo>
          <Desc>
         Shanmukh.Our shopping page here to help you to choose the right one – you don’t need to give effort.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"1px"}}/> 202 Sunrise Classic
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +91 9247446655
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> Shanmuka2302@gmail.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;