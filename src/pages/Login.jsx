import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";

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
  ${mobile({ width: "100%" })}
`;

const Input = styled.input`
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid thistle;
  outline: none;
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
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  &:hover {
    background-color: #28a745;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-transform: capitalize;
  text-decoration: underline;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;
const Error = styled.span`
  color: red;
  background-color: #ffe6e6;
`;
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    login(dispatch, { username, password });
  }

  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input
            placeholder=" Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {error && (
            <Error>
              The username or password is incorrect. Please check and try again.
            </Error>
          )} */}
          <Button onClick={handleLogin}>
            {/* {isFetching ? "please wait..." : "login"} */}
            login
          </Button>
          <Link>Do Not You Remember The Password? </Link>
          <Link>Ceate a New Account </Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
