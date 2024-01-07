import React from 'react';
import { useLocation } from 'react-router-dom';

export const Calculator = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const num1 = parseFloat(params.get('num1'));
  const num2 = parseFloat(params.get('num2'));
  const op = decodeURIComponent(params.get('op'));

  let result;

  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    // Add more cases for other operations if needed

    default:
      result = 'Invalid operation';
  }

  return (
    <div>
      <h1>Your calculation Result is {result}</h1>
    </div>
  );
};
