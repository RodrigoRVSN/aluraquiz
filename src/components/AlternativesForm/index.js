/* eslint-disable linebreak-style */
import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
        background-color: ${({ theme }) => theme.colors.primary};
        
        &[data-status="SUCCESS"] {
          background-color: ${({ theme }) => theme.colors.success};
            @keyframes blinker {
              50% {
                  opacity: 0;
              }
            }
            animation: blinker 0.5s linear infinite;
          }
        &[data-status="ERROR"] {
            background-color: ${({ theme }) => theme.colors.wrong};
            @keyframes blinker {
              50% {
                  opacity: 0;
              }
            }
            animation: blinker 0.5s linear infinite;
      }
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong}10;
      }
    
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
