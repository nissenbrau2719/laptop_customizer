import React from 'react';

function OptionSelector(props) {

  return (
    <div className="feature__item">
      <input
        type="radio"
        id={props.id}
        className="feature__option"
        name={props.name}
        checked={props.checked}
        value={props.item}
        onChange={(e) => props.updateFeature(e.target.name, e.target.value)}
      />
      <label htmlFor={props.name} className="feature__label">
        {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default OptionSelector;