import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
`;
const Text = styled.h4`
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 4px;
  ${mobile({ fontSize: "12px" })}
`;
function Announcement() {
  return (
    <Container>
      <Text>Super Deo!! Free Shopping On Orders Over $50</Text>
    </Container>
  );
}

export default Announcement;
