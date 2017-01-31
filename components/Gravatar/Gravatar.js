import React, { PropTypes } from 'react';
import md5 from 'md5';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import Avatar from './Avatar';
import Email from './Email';
import { setFetchedStatus, setGravatarEmail } from './../../src/home/homeActions';

export class GravatarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: 'http://placehold.it/200x200',
    };
    this.updateGravatar = this.updateGravatar.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  updateGravatar() {
    this.setState({
      src: `http://gravatar.com/avatar/${md5(this.props.email)}?s=200`,
    });
    this.props.onFetchGravatar();
  }

  updateEmail(event) {
    this.props.onEmailChange(event.target.value);
  }

  render() {
    return (
      <div>
        <h4>Avatar for:</h4>
        <Avatar email={this.props.email} src={this.state.src} />
        <Email
          fetchGravatar={this.updateGravatar}
          handleEmailChange={this.updateEmail}
        />
      </div>
    );
  }
}

GravatarComponent.propTypes = {
  email: PropTypes.string,
  onFetchGravatar: PropTypes.func,
  onEmailChange: PropTypes.func,
};
GravatarComponent.defaultProps = {
  email: 'test@example.com',
  onFetchGravatar: () => {},
  onEmailChange: () => {},
};


// container
const emailSelector = state => state.home.gravatarEmail;
export const mapStateToProps = state => ({ email: emailSelector(state) });
export const mapDispatchToProps = dispatch => ({
  onEmailChange: (email) => {
    dispatch(setGravatarEmail(email));
  },
  onFetchGravatar: () => {
    dispatch(setFetchedStatus(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GravatarComponent);
