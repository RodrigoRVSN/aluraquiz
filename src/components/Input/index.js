/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Input = styled.input`
    height: 40px;
    width: 300px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.mainBg};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #FFFFFF;
    font-size: 16px;
    &:hover{
        transition: ease-in 0.3s; 
        border: 3px solid ${({ theme }) => theme.colors.primary};
    }
`;

export default Input;
