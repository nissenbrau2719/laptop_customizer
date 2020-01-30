import React from 'react';

function OptionSelector(props) {

  return (
    <React.Fragment className="feature__item" >
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
    </React.Fragment>
  );
}

export default OptionSelector;