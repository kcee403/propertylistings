import React from 'react';

const button = (props) => (
  <button
    data-color={props.color}
    disabled={props.disabled}
    className={[props.btnType].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);
export default button;
