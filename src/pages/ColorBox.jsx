import { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('#ffffff');

 
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    return randomColor;
  };


  const changeColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: color }}
    >
      <div className="text-center">
        <h3 className="text-white mb-3">{color}</h3>
        <button
          className="btn btn-light btn-lg"
          onClick={changeColor}
        >
          Change Color
        </button>
      </div>
    </div>
  );
};

export default ColorBox;
