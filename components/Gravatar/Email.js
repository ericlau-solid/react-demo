import React, { PropTypes } from 'react';

export const EmailComponent = ({ fetchGravatar, handleEmailChange }) =>
  <div className="form-group">
    <input
      className="form-control"
      onChange={handleEmailChange}
      placeholder="Gravatar email address"
      style={{ width: 200 }}
      type="text"
    />
    <button onClick={fetchGravatar} className="btn-success btn">Fetch</button>
  </div>
;

EmailComponent.propTypes = {
  handleEmailChange: PropTypes.func,
  fetchGravatar: PropTypes.func,
};

export default EmailComponent;
