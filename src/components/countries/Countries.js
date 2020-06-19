import React, { Component } from 'react';
import Country from './Country';
import css from './countries.module.css';

export default class Countries extends Component {
  render() {
    const { countries } = this.props;
    return (
      <div className={`${css.border} ${css.flexRow}`}>
        {countries.map((country) => {
          const { id } = country;
          return <Country key={id} country={country} />;
        })}
      </div>
    );
  }
}
