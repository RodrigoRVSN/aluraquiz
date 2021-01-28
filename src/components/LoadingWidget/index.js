/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import React from 'react';
import { Widget } from '../Widget';
import db from '../../../db.json';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <img
          alt="foto loading"
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
          }}
          src={db.ld}
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;
