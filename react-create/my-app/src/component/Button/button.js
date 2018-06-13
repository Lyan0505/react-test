import React from 'react';

import classnames from 'classnames';

import './index.less';

export default (props) => {
  let classes = classnames({'component-ui-button': true, 'disabled': props.disabled, 'radius': props.radius});
  return (
    <div 
      className={classes} 
      onClick={props.onClick} 
      style={props.style}
      {...props}>{props.children}
      </div>
  );
};