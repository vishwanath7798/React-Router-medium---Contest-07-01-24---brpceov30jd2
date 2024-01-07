import React from 'react';
import { useParams } from 'react-router-dom';

export const BackgroundColorChanger = () => {
  const { colorname } = useParams();

  const divStyle = {
    height: '100vh',
    backgroundColor: colorname,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  return (
    <div style={divStyle}>
      <main>
        <h1>Background Color Changer</h1>
        <p>Color: {colorname}</p>
      </main>
    </div>
  );
};
