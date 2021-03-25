import React from 'react';

function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.name}
    </button>
  );
}

export default Button;
