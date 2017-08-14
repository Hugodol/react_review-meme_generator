/* START SOLUTION */
import React from 'react';
import PropTypes from 'prop-types';

const Meme = props => (
  <div className="myMeme">
    <img src={props.url} alt="" />
    <span className="memeText">{props.text}</span>
  </div>
);

Meme.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Meme;

/* ELSE
// Meme Component
  // Should render an image and text
END SOLUTION */
