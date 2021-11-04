import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

const Container = ({ className: additionalClassName, children, ...otherProps }) => {
  const className = clsx(
    'relative max-w-[1760px] 3xl:max-w-[1472px] 2xl:max-w-[1216px] xl:max-w-[936px] lg:max-w-none lg:px-8 mx-auto',
    additionalClassName
  );

  return (
    <div className={className} {...otherProps}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: null,
};

export default Container;
