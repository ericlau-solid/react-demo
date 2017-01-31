import React, { PropTypes } from 'react';

export const AvatarComponent = ({ email, src }) =>
  <div className="avatar">
    <p>
      <em>{email}</em>
    </p>
    <img alt="avatar" src={src} className="img-rounded" />
  </div>
;

AvatarComponent.propTypes = {
  email: PropTypes.string,
  src: PropTypes.string,
};

export default AvatarComponent;
