import styled, { keyframes } from "styled-components";

interface MyProps {
  variant?: any;
}

export const StyledButton = styled.button<MyProps>`
  border: 2px solid #4caf50;
  background-color: ${(props: any) =>
    props.variant === "outline" ? "#fff" : "#4caf50"};
  color: ${(props: any) => (props.variant === "outline" ? "#4caf50" : "#fff")};
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props: any) =>
      props.variant !== "outline" ? "#fff" : "#4caf50"};
    color: ${(props: any) =>
      props.variant !== "outline" ? "#4caf50" : "#fff"};
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  box-shadow: 0 3px #e5e4e4;
  &:active {
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
  }
`;

const rotate = keyframes`
 from {
    transform: rotate(0deg);
}
to
{
    transform: rotate(360deg);
}`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 500ms linear;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
