/* START SOLUTION */
import React from 'react';
import PropTypes from 'prop-types';
import Meme from './Meme';

const MyMemes = props => (
  <div className="myMemes">
    {props.myMemes.map((meme, i) =>
      (<Meme
        key={i}
        url={meme.url}
        text={meme.text}
      />),
    )}
  </div>
);

MyMemes.propTypes = {
  myMemes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      url: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default MyMemes;

/* ELSE
// MyMemes Component
  // Should dynamically render all saved memes
END SOLUTION */
