/* eslint-disable linebreak-style */
import styled from 'styled-components';

const AternativesForm = styled.form`
    label {
        &[data-selected="true"] {
            background-color: ${({ theme }) => theme.colors.primary};
        }
        &[data-status="SUCCESS"] {
            background-color: ${({ theme }) => theme.colors.success};
        }
        &[data-status="ERROR"] {
            background-color: ${({ theme }) => theme.colors.wrong};
        }
    }
    button {
        margin-top: 24px;
    }
`;

export default AternativesForm;
