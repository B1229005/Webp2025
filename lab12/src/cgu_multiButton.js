import React from 'react';
import Button from '@mui/material/Button';

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + '被點了';
};

const MultiButton = (num) => {
  let output = [];
  for (let i = 1; i <= num; ++i) {
    output.push(
      <Button variant="contained" color="primary"
      onClick={changeText}>第{i}個按鍵</Button>)
  }
  return output;
};

export default MultiButton;
