import React from 'react';

export default function PageButtons({ forwardClick, backwardClick }) {
  return (
    <div>
      <button onClick={backwardClick}>Previous</button>
      <button onClick={forwardClick}>Next</button>
    </div>
  );
}
