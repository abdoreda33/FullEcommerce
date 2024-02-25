import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const ErrorCode = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 24px;
`;

const Button = styled.button`
  background-color: none;
  border: none;
  margin: 20px;
  padding: 7px 20px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  font-size: 18px;
  &:hover {
    background-color: #f8f9f4;
  }
`;
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NotFoundContainer>
        <ErrorCode>404</ErrorCode>
        <Message>Page Not Found</Message>
        <Button onClick={() => navigate(-1)}>
          <IoMdArrowRoundBack />
          Back
        </Button>
      </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
