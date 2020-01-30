import React from 'react';
import Selection from '../Selection/Selection';
import Totalizer from '../Totalizer/Totalizer';
import './Cart.css'

function Cart(props) {
  const summary = Object.keys(props.selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selected[feature];
    return (
      <Selection 
        key={featureHash}
        label={feature} 
        value={selectedOption.name}
        cost={props.USCurrencyFormat.format(selectedOption.cost)}
      />
    );
  });

  return(
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Totalizer selected={props.selected} USCurrencyFormat={props.USCurrencyFormat} />
    </section>
  )
}

export default Cart;