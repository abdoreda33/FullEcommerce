import styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import { publicRequest } from "../requestMethods";
const Container = styled.div`
  display: flex;

  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      try {
        const res = await publicRequest.get(
          cat
            ? `/products?category
            =${cat}`
            : "/products"
        );
        setProducts(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    // Object.entries(filters)  =>    بيحول كائن الي مصفوفه من أزواج المفاتيح والقيم
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Container>
        {cat
          ? filteredproducts.map((item, index) => (
              <Product key={index} item={item} productId={item._id} />
            ))
          : products.map((item, index) => <Product key={index} item={item} />)}
      </Container>
    </>
  );
}

export default Products;
