import { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('#000000');


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
      className="d-flex justify-content-center align-items-center vh-100 bg-light"
    >
      <div>
        <div className="d-flex justify-content-center align-items-center rounded" style={{ backgroundColor: color, width: '250px', height: '250px' }} >
          <h3 className='text-white'>{color}</h3>
        </div>
        <div className="mt-3 text-center">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={changeColor}
          >
            Change Color
          </button>
        </div>
      </div>

    </div>
  );
};

export default ColorBox;
