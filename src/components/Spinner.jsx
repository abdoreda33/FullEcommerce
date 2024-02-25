import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #3498db;
  animation: ${rotate} 1s linear infinite;
`;

const LoadingText = styled.span`
  font-size: 24px;
  margin-left: 10px;
`;

const CustomSpinner = () => (
  <SpinnerContainer>
    <Spinner />
    <LoadingText>Loading...</LoadingText>
  </SpinnerContainer>
);

export default CustomSpinner;
