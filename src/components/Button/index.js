/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const Button = styled.button`
margin: auto 2%;
margin-top: 20px;
width: 100%;
height: 50px;
font-size: 20px;
border-radius: 10px;
cursor: pointer;
color: #171B10;
background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    transition: ease-in 0.3s; 
    border: 3px solid ${({ theme }) => theme.colors.success};
  }
  &:disabled {
    background-color: #000000;
    border: 3px solid #000000;
  }
`;

export default Button;
