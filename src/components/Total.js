import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${
        props.car.price +
        props.car.features.reduce((sum, feature) => sum + feature.price, 0) +
        props.root.additionalPrice}
      </h4>
    </div>
  );
};

export default connect(state => {
  return {
    car: state.car,
    root: state.root,
  };
})(Total);