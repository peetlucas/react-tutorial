import React from 'react';
import PropTypes from 'prop-types';

 //Add the styles here
 const mySuperStyles = {
    fontSize: "16px",
    background: "black",
    border: "1px solid yellow",
 };

const Badge = (props) => {   
  return (
    <button style={mySuperStyles} type="button" className="btn btn-primary">
      {props.label}
      <span className="badge badge-light">
        {props.number}
      </span>
      <span className="badge badge-light">
        {props.number + 2}
      </span>
    </button>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  number: PropTypes.string,
};

export default Badge