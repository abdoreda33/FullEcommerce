import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position: relative;
  border-radius: 8px;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Info = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
function Product({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <IoCartOutline />
        </Icon>
        <Icon>
          <NavLink to={`/product/${item._id}`}>
            <IoSearchOutline />
          </NavLink>
        </Icon>
        <Icon>
          <CiHeart />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;
