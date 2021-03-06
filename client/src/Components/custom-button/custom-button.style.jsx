import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color:black;
    color:white;

    &:hover{
        background-color:white;
        color:black;
        border:1px solid black;
    }
`;

const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: white;
  border: none;
  &:hover {
    color:#357ae8;
    background-color: white;
    border: 1px solid #357ae8;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }

  return props.invered ? invertedButtonStyle : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border:1px solid black;
  border-radius:50px;
  transition:400ms ease-in-out;
  ${getButtonStyle}
`;
