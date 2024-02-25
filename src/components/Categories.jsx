import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;

  padding: 20px;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;
function Categories() {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
}

export default Categories;
