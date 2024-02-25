import styled from "styled-components";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { sliderItems } from "../data";
import React, { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  transform: translateX(${(props) => props.slideindex * -100}vw);
  transition: all 1.5s ease;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img``;
const InfoContainer = styled.div`
  flex: 1;
  width: 100%;
  padding: 40px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 60px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  text-transform: uppercase;
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  background-color: transparent;
  padding: 15px 30px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`;

function Slider() {
  const [slideindex, setSlideIndex] = useState(0);
  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideindex > 0 ? slideindex - 1 : 2);
    } else {
      setSlideIndex(slideindex < 2 ? slideindex + 1 : 0);
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <MdArrowLeft />
      </Arrow>
      <Wrapper slideindex={slideindex}>
        {sliderItems.map((item) => (
          <React.Fragment key={item.id}>
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.image} />
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          </React.Fragment>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <MdArrowRight />
      </Arrow>
    </Container>
  );
}

export default Slider;
