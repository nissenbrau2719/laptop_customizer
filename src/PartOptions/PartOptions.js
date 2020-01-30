import React from 'react';
import OptionSelector from '../OptionSelector/OptionSelector';
import slugify from 'slugify';
import './PartOptions.css'

function PartOptions(props) {
  const options = props.feature.map(item => {
    const itemHash = slugify(JSON.stringify(item));
    // const isChecked = (item.name === props.selected[props.featureName].name);
    return (
      <OptionSelector
        key={itemHash}
        id={itemHash}
        name={props.featureName}
        checked={item.name === props.selected[props.featureName].name}
        updateFeature={props.updateFeature}
        htmlFor={itemHash}
        item={item}
        feature={props.featureName}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    );
  });

  return (
    <fieldset className="feature" >
      <legend className="feature__name">
        <h3>{props.featureName}</h3>
      </legend>
      {options}
    </fieldset>
  );
}

export default PartOptions;

