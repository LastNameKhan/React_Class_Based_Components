import styled from "styled-components";

interface MyProps {
  variant?: any;
}

export const StyledDiv = styled.div<MyProps>`
  /* border: 2px solid #525155; */
  /* background-color: ${(props: any) =>
    props.variant === "outline" ? "#383838" : "#525155"}; */
  background: #1f1c2c;
  background: -webkit-linear-gradient(to right, #928dab, #1f1c2c);
  text-align: right;
  background: linear-gradient(to right, #928dab, #1f1c2c);
  color: ${(props: any) => (props.variant === "outline" ? "#4A34AF" : "#fff")};
  text-align: center;
  justify-content: space-around;
  height: 65px;
  width: 100%;
  margin: auto;
  font-size: 20px;
  position: fixed;
`;

export const StyledButton = styled.button`
  border: 2px solid grey;
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#171717" : "#3c364f"};
  color: ${(props: any) => (props.variant === "outline" ? "#d2d2d2" : "#fff")};
  text-align: center;
  height: 52px;
  width: 150px;
  cursor: pointer;
  margin: auto;
  margin-top: 6px;
  margin-right: 7px;
  float: right;
  border-radius: 5px;
  justify-content: right;
  font-size: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#1f1c2c" : "#de142c"};
    color: ${(props: any) => (props.variant !== "outline" ? "#fff" : "#fff")};
  }
`;

export const StyledHeading = styled.p`
  float: left;
  margin: auto;
  margin-top: 13px;
  margin-left: 10px;
  font-weight: 600;
  font-size: x-large;
  color: black;
`;

export const StyledContainer = styled.div`
  height: fit-content;
  width: 350px;
  margin: auto;
  margin-top: 100px;
  border: 2px solid rgba(122, 122, 222, 0.25);
  border-radius: 10px;
  /* box-shadow: rgba(240, 240, 240, 0.35) 0px 5px 15px; */
  box-shadow: rgba(122, 122, 222, 0.25) 0px 50px 100px -20px,
    rgba(240, 240, 240, 0.3) 0px 30px 60px -30px;
  /* box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(254, 254, 254, 0.15) 0px -36px 30px 0px inset, rgba(252, 250, 250, 0.1) 0px -79px 40px 0px inset, rgba(254, 254, 254, 0.06) 0px 2px 1px, rgba(252, 250, 250, 0.09) 0px 4px 2px, rgba(250, 247, 247, 0.09) 0px 8px 4px, rgba(252, 251, 251, 0.09) 0px 16px 8px, rgba(253, 250, 250, 0.09) 0px 32px 16px; */
`;

export const StyledTodoHeading = styled.p`
  margin: auto;
  margin-top: 13px;
  margin-left: 10px;
  font-weight: 600;
  font-size: x-large;
`;

export const StyledInput = styled.input`
  height: 50px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: x-large;
  margin-top: 40px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#e3e3e4" : "#de142c"};
    color: ${(props: any) => (props.variant !== "outline" ? "black" : "#fff")};
  }
`;

export const StyledSelect = styled.select`
  height: 55px;
  width: 305px;
  margin-top: 25px;
  border-radius: 5px;
  border: 1px solid grey;
  font-size: x-large;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#e3e3e4" : "#de142c"};
    color: ${(props: any) => (props.variant !== "outline" ? "black" : "#fff")};
  }
`;

export const StyledAddButton = styled.button`
  border: 2px solid grey;
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#171717" : "#5f518a"};
  color: ${(props: any) => (props.variant === "outline" ? "#d2d2d2" : "#fff")};
  text-align: center;
  height: 52px;
  width: 150px;
  cursor: pointer;
  margin: auto;
  margin-top: 25px;
  border-radius: 5px;
  justify-content: right;
  font-size: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#10073c" : "#943f49"};
    color: ${(props: any) => (props.variant !== "outline" ? "#fff" : "#fff")};
  }
`;
