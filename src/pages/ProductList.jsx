import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const Container = styled.div``;
const Title = styled.h1`
  font-size: 30px;
  margin: 20px;
  font-weight: 900;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin-left: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  margin-left: 20px;
  padding: 7px;
  margin-right: 20px;
  cursor: pointer;
  ${mobile({ margin: "6px 3px" })}
`;
const Optoin = styled.option``;
function ProductList() {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  function handleFilters(e) {
    const value = e.target.value;
    setFilters({ ...filters, [e.target.name]: value });
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Optoin disabled>Color</Optoin>
            <Optoin>White</Optoin>
            <Optoin>Black</Optoin>
            <Optoin>Red</Optoin>
            <Optoin>Blue</Optoin>
            <Optoin>Yellow</Optoin>
            <Optoin>Green</Optoin>
          </Select>

          <Select name="size" onChange={handleFilters}>
            <Optoin disabled>Size</Optoin>
            <Optoin>XS</Optoin>
            <Optoin>S</Optoin>
            <Optoin>M</Optoin>
            <Optoin>L</Optoin>
            <Optoin>XL</Optoin>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Optoin value="newest">Newest</Optoin>
            <Optoin value="asc">Price (asc)</Optoin>
            <Optoin value="desc">Price (desc)</Optoin>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;
