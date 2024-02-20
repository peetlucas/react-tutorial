import React from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
    //Add the condition inside this function
    if(props.show === false){
        return null;
    }else{
        return (
            <div className="alert alert-danger" role="alert">{props.text}</div>
        )
    }
  
}

Alert.propTypes ={text: PropTypes.string};

export default Alert