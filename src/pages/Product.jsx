import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { FaMinus, FaPlus } from "react-icons/fa";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomSpinner from "../components/Spinner";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ImageContainer = styled.div`
  flex: 1;
  border-radius: 10px;
  margin-top: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: 72vh;
  object-fit: contain;
  border-radius: 10px;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: 30px 0;
  margin-left: 70px;
`;
const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 2px;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  width: 80%;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 200;
`;
const Price = styled.span`
  font-size: 24px;
  font-weight: 400;
`;

const SelectContainer = styled.div`
  margin-top: 30px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    justifyContent: "space-around",
    width: "100%",
  })}
`;
const FilterTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(porps) => porps.color};
  margin: 0 3px;
  cursor: pointer;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  padding: 4px 8px;
  cursor: pointer;
  ${mobile({ marginRight: "20px" })}
`;
const Option = styled.option``;
const Cart = styled.div`
  margin-top: 40px;
  width: 50%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "100%",
    justifyContent: "space-around",
  })}
`;
const AddCart = styled.div`
  display: flex;
  align-items: center;
`;
const Amount = styled.span`
  width: 20px;
  margin: 0px 4px;
  padding: 4px 6px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid teal;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px 15px;
  border: 2px solid teal;
  background-color: transparent;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f8f6f8;
  }
`;

function Product() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("L");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  function handleClick(type) {
    if (type === "dec") {
      quantity > 1 && setQuantity((q) => q - 1);
    } else if (type === "inc") {
      setQuantity((q) => q + 1);
    }
  }

  function handleAddProduct() {
    dispatch(addProducts({ ...product, quantity, color, size }));
  }
  return (
    <Container>
      {isloading && <CustomSpinner />}
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <SelectContainer>
            <Filter>
              <FilterTitle>Color </FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size </FilterTitle>
              <Select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <Option key={s}>{s}</Option>
                ))}
              </Select>
            </Filter>
          </SelectContainer>
          <Cart>
            <AddCart>
              <FaMinus
                style={{ cursor: "pointer", color: "Red" }}
                onClick={() => handleClick("dec")}
              />
              <Amount>{quantity}</Amount>
              <FaPlus
                style={{ cursor: "pointer", color: "Blue" }}
                onClick={() => handleClick("inc")}
              />
            </AddCart>
            <Button onClick={handleAddProduct}>Add To Cart</Button>
          </Cart>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Product;
