import React from 'react';
import PropTypes from 'prop-types';

const Feature = (props) => {
  const {
    imgUrl,
		title,
		text
  } = props.data

  return (
    <div className="feature">
      <img src={require(`./${imgUrl}`)} alt={title} className="feature__icon" />
      <h2 className="feature__title text--uppercase">
        {title}
      </h2>
      <p className="feature__text">
        {text}
      </p>
      <button className="feature__button text--uppercase">
        Details
      </button>
    </div>
  )
}

Feature.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Feature;
