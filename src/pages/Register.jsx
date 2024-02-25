import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSTstWSA1rO98kv-CRmlOo1xu6hJCxqmtqA&usqp=CAU")
      no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border: 2px solid thistle;
  border-radius: 5px;
  ${mobile({ width: "100%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  padding-bottom: 20px;
  text-transform: uppercase;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  ${mobile({ width: "90%" })}
`;

const Input = styled.input`
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid thistle;
  outline: none;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 10px 0px;
`;
const Button = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #11a212;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.4s ease;

  &:hover {
    background-color: #28a745;
  }
`;
function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordancewith the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
