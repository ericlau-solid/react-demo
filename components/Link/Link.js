/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint
 jsx-a11y/anchor-has-content: 0
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import history from '../../src/history';
import s from './Link.css';

class Link extends React.Component {
  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onClick: PropTypes.func,
  };

  handleClick = (event) => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (event.button !== 0 /* left click */) {
      return;
    }

    if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return;
    }

    if (event.defaultPrevented === true) {
      return;
    }

    event.preventDefault();

    if (this.props.to) {
      history.push(this.props.to);
    } else {
      history.push({
        pathname: event.currentTarget.pathname,
        search: event.currentTarget.search,
      });
    }
  };

  render() {
    const { to, ...props } = this.props; // eslint-disable-line no-use-before-define
    const windowHref = window.location.href;
    const linkActive = to !== '/' && windowHref.indexOf(to) >= 0 ? s.active : '';

    return (
      <a
        href={typeof to === 'string' ? to : history.createHref(to)}
        {...props}
        className={cx(linkActive, props.className)}
        onClick={this.handleClick}
      />
    );
  }
}

export default Link;
