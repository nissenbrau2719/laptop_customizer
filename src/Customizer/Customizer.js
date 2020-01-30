import React from 'react';
import PartOptions from '../PartOptions/PartOptions';

function Customizer(props) {
  
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <PartOptions
        key={featureHash}
        feature={props.features[feature]}
        updateFeature={props.updateFeature}
        featureName={feature}
        selected={props.selected}
        USCurrencyFormat={props.USCurrencyFormat}
      />
    )
  })

  return(
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  );
  
}
  
export default Customizer;