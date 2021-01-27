/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <img width="100" height="80" src="https://i.pinimg.com/originals/0d/8d/07/0d8d07a763e83f93acf810ae2c523bd7.png" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: 0 auto;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
