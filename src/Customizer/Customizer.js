import React from 'react';




import PartOptions from '../PartOptions/PartOptions';

function Customizer(props) {
  // const features = Object.keys(props.features).map((feature, idx) => {
  //   const featureHash = feature + '-' + idx;
  //   const options = props.features[feature].map(item => {
  //     const itemHash = slugify(JSON.stringify(item));
  //     return (
  //       <OptionSelector
  //         key={itemHash}
  //         id={itemHash}
  //         name={slugify(feature)}
  //         checked={item.name === props.selected[feature].name}
  //         updateFeature={props.updateFeature}
  //         htmlFor={itemHash}
  //         item={item}
  //         feature={feature}
  //         USCurrencyFormat={props.USCurrencyFormat}
  //       />
  //     );
  //   });

  //   return (
  //     <fieldset className="feature" key={featureHash}>
  //       <legend className="feature__name">
  //         <h3>{feature}</h3>
  //       </legend>
  //       {options}
  //     </fieldset>
  //   );
  // });
  
  const features = Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <PartOptions
        key={featureHash}
        feature={props.features[feature]}
        updateFeature={props.updateFeature}
        header={feature}
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