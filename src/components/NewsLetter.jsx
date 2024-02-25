import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 900;
  ${mobile({ fontSize: "30px" })}
`;
const Desc = styled.p`
  font-size: 23px;
  font-weight: 500;
  ${mobile({ textAlign: "center" })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border: none;
  font-size: 20px;
  letter-spacing: 2px;
  outline: none;
  padding-left: 20px;
  ${mobile({ fontSize: "14px" })}
`;
const Button = styled.button`
  background-color: teal;
  color: white;
  font-size: 30px;
  border: none;
  outline: none;
  width: 70px;
  border-radius: 0px 15px 15px 0px;
  cursor: pointer;
  padding: 4px 0;
  ${mobile({ width: "40px" })}
`;
function NewsLetter() {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <IoMdSend />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
