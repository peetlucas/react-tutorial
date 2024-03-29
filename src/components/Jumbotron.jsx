import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = (props) => {
  return (
    <div className='jumbotron m-5'>
        <h1 className='display-4'>{props.title}</h1>
	<p>Branch feature A changes</p>
        <p className='lead'>{props.description}</p>
	<p>Paragraph added to featureB branch</p>
        <a className='btn btn-primary btn-lg' href={props.buttonURL} role='button'>
            {props.buttonLabel}
        </a>
    </div>
  )
}

Jumbotron.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonUrl: PropTypes.string
};

export default Jumbotron
