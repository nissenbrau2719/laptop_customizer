import React from 'react';
import './OptionSelector.css'

function OptionSelector(props) {

  return (
    <div className="feature__item" >
      <input
        type="radio"
        id={props.id}
        className="feature__option"
        name={props.name}
        checked={props.checked}
        value={props.item}
        onChange={() => props.updateFeature(props.name, props.item)}
      />
      <label htmlFor={props.htmlFor} className="feature__label">
        {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default OptionSelector;