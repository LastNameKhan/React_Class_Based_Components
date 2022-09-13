import styled from "styled-components";

interface MyProps {
  variant?: any;
}


export const StyledButton = styled.button<MyProps>`
  border: 2px solid #00c851;
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#fff" : "#00c851"};
  color: ${(props: any) => (props.variant === "outline" ? "#00c851" : "#fff")};
  border-radius: 3px;
  height: 40px;
  width: 150px;
  align-items: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#fff" : "#00c851"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#00c851" : "#fff"};
  }
`;

export const StyledDiv = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 300px;
    display: inline-table;
  }
`;

export const StyledGridDiv = styled.div`
  height: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(1, 1fr);
  @media screen and (max-width: 600px) {
    width: 600px;
  }
  @media (min-width: 600px) and (max-width: 1200px) {
    width: 1170px;
  }
`;

export const StyledImage = styled.img`
  height: 500px;
  width: 800px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 380px;
    height: 250px;
  }
`;
