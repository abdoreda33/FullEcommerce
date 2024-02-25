import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Tilte = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  color: gray;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
`;
function CategoryItem({ category }) {
  console.log(category.img);
  return (
    <Container>
      <NavLink to={`/products/${category.cat}`}>
        <Image src={category.img} />
        <Info>
          <Tilte>{category.title}</Tilte>
          <Button>Shop Now</Button>
        </Info>
      </NavLink>
    </Container>
  );
}

export default CategoryItem;
