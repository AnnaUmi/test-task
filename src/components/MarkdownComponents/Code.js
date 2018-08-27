import React from 'react';
import PropTypes from 'prop-types';

import Hint from './Hint.styles';

const Code = props => {
  const { className, children } = props;
  if (className === 'language-hint') {
    return <Hint>{children}</Hint>;
  }
  return <code id="codes" style={{ fontWeight: 600 }} {...props} />;
};

Code.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Code.defaultProps = {
  children: '',
  className: '',
};

export default Code;
