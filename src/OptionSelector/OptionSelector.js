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
        onChange={e => props.updateFeature(props.feature, props.item)}
      />
      <label htmlFor={props.name} className="feature__label">
        {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
      </label>
    </div>
  );
}

export default OptionSelector;