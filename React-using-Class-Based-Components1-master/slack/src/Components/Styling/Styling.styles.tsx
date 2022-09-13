import styled from "styled-components";

interface MyProps {
  variant?: any;
}

export const LogoImage = styled.img`
  height: 50px;
  width: 200px;
  color: #fff;
`;
export const StyledButton = styled.button<MyProps>`
  border: 2px solid #4a34af;
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#fff" : "#4A34AF"};
  color: ${(props: any) => (props.variant === "outline" ? "#4A34AF" : "#fff")};
  text-align: center;
  cursor: pointer;
  height: 50px;
  width: 120px;
  border-radius: 5px;
  margin: 10px;
  font-size: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#fff" : "#4A34AF"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#4A34AF" : "#fff"};
  }
  @media (min-width: 900px) and (max-width: 1200px) {
    height: 50px;
    width: 500px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    height: 50px;
    width: 500px;
  }
  @media (min-width: 0px) and (max-width: 600px) {
    height: 50px;
    width: 350px;
  }
`;

export const GetStartedButton = styled(StyledButton)`
  @media (min-width: 0px) and (max-width: 1200px) {
    width: 400px;
    text-align: center;
    margin-left: 45px;
  }
  @media (min-width: 1500px) and (max-width: 3000px) {
    justify-content: left;
    text-align: left;
    margin-right: 600px;
  }
`;

export const StyledDiv = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 425px;
    margin-left: 50px;
  }
  @media (min-width: 600px) and (max-width: 1000px) {
    width: 900px;
  }
`;

export const StyledImg = styled.img`
  height: 400px;
  width: 500px;
  @media (min-width: 0px) and (max-width: 750px) {
    
  }
`;

export const StyledTextDiv = styled(StyledDiv)`
  background-color: #fff;
  height: fit-content;
  width: 700px;
  @media (min-width: 0px) and (max-width: 600px) {
    width: 400px;
    text-align: left;
    margin-left: -100px;
  }
  @media (min-width: 600px) and (max-width:1400px) {
    text-align: left;
    align-items: center;
    margin-left: 220px;
  }
  @media (min-width: 1500px) and (max-width: 3000px) {
    text-align: left;
  }
`;
