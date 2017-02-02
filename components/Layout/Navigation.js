/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';
import s from './Navigation.css';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className={`mdl-navigation ${s.navContainer}`} ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link mdl-color-text--black" to="/product">Product</Link>
        <Link className="mdl-navigation__link mdl-color-text--black" to="/works">Works</Link>
        <Link className="mdl-navigation__link mdl-color-text--black" to="/team">Team</Link>
        <Link className="mdl-navigation__link mdl-color-text--black" to="/about">About</Link>
        <Link className={`mdl-navigation__link mdl-color-text--black ${s.contact}`} to="/contact">Contact</Link>
      </nav>
    );
  }

}

export default Navigation;
