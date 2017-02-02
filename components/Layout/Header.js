/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import SiteMenu from './SiteMenu';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {
  static propTypes = {
    addCount: PropTypes.func,
  }

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <SiteMenu />
          <Link className={`mdl-layout-title mdl-color-text--black ${s.title} `} to="/">
            MACHO
          </Link>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCount: () => {
    dispatch({
      type: 'COUNT',
      payload: null,
    });
  },
});

export default connect(null, mapDispatchToProps)(Header);
