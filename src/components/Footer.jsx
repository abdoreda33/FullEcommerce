import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  padding: 15px 0;
  height: 30vh;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  padding-left: 20px;
`;
const Title = styled.h1`
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 20px;
  ${mobile({ fontSize: "24px" })}
`;
const Desc = styled.p`
  font-size: 17px;
  ${mobile({ fontSize: "12px", width: "90%" })}
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  ${mobile({ width: "20px", height: "20px", fontSize: "12px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const TitleLink = styled.h1`
  font-size: 30px;
  font-weight: 700;
  ${mobile({ fontSize: "19px", marginTop: "15px" })}
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  font-size: 17px;
  font-weight: 500;
  width: 50%;
  margin-top: 10px;
  cursor: pointer;
  ${mobile({ fontSize: "12px" })}
`;
const Right = styled.div`
  flex: 1;
`;
const Tilte = styled.h1`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
  margin-left: 40px;
  ${mobile({ fontSize: "19px", marginTop: "15px" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  margin-left: 40px;
  ${mobile({ fontSize: "12px" })}
`;
const Payment = styled.img`
  margin-left: 40px;
`;
function Footer() {
  return (
    <Container>
      <Left>
        <Title>ABDO.</Title>
        <Desc>
          Front-end developer with expertise in e-commerce applications,
          specializing in crafting intuitive user interfaces and seamless user
          experiences. Passionate about leveraging cutting-edge technologies to
          enhance online shopping journeys. Committed to delivering visually
          appealing designs with optimal performance
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FaTwitter />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <FaLinkedin />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <TitleLink>useful Links</TitleLink>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Tilte>Contact</Tilte>
        <ContactItem>
          <FaLocationDot style={{ color: "blue" }} />{" "}
          <span style={{ paddingLeft: "10px" }}> Egypt , Cairo</span>
        </ContactItem>
        <ContactItem>
          <FaPhoneAlt style={{ color: "blue" }} />{" "}
          <span style={{ paddingLeft: "10px" }}> +20 (1224007449)</span>
        </ContactItem>
        <ContactItem>
          <MdMarkEmailUnread style={{ color: "blue" }} />{" "}
          <span style={{ paddingLeft: "10px" }}>
            {" "}
            (abdoreda17112003@gmail.com)
          </span>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}

export default Footer;
