import React from 'react';

function Selection(props) {
  return (
    <div className="summary__option">
      <div className="summary__option__label">{props.label} </div>
      <div className="summary__option__value">{props.value}</div>
      <div className="summary__option__cost">{props.cost}</div>
    </div>
  );
}

export default Selection;