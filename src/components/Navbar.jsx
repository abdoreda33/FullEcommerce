import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  ${mobile({ display: "none" })}
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  border: 1px solid gray;
  border-radius: 2px;
  ${mobile({ marginLeft: "12px" })}
`;
const Input = styled.input`
  width: 180px;
  border: none;
  padding: 5px;

  outline: none;
  ${mobile({
    width: "50px",
    padding: "3px",
    fontSize: "10px",
  })}
`;
const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  text-align: center;
  font-weight: 900;
  ${mobile({ fontSize: "22px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.h4`
  text-transform: uppercase;
  margin: 10px 15px;
  ${mobile({ flex: 2, fontSize: "12px", margin: "0px  3px " })}
`;

const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  ${mobile({ width: "18px", height: "18px", top: "-7px", right: "21px" })}
`;

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Span>EN</Span>
          <Search>
            <Input placeholder="Search" />
            <IoIosSearch />
          </Search>
        </Left>
        <Center>
          <Logo>ABDO.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <NavLink to="/cart">
            <MenuItem
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <FaShoppingCart size={24} style={{ cursor: "pointer" }} />
              {quantity > 0 ? <Badge>{quantity}</Badge> : ""}
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
