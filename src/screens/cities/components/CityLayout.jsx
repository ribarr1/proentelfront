import React from 'react';

const CityLayout = (props) => (
  <section className="city-layout">
    <div className="container">
      {props.children}
    </div>
  </section>
);

export default CityLayout;