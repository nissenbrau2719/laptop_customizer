import React from 'react';
import OptionSelector from '../OptionSelector/OptionSelector';
import slugify from 'slugify';

function PartOptions(props) {
  const options = props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    const isChecked = (item.name === props.selected[props.header].name);
    return (
      <OptionSelector
        key={itemHash}
        id={itemHash}
        name={props.header}
        checked={isChecked}
        updateFeature={props.updateFeature}
        htmlFor={itemHash}
        item={item}
        feature={props.header}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });

  return (
    <fieldset className="feature">
      <legend className="feature__name">
        <h3>{props.header}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

export default PartOptions;

