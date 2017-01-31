import React from 'react';
import { IconButton, Menu, MenuItem } from 'react-mdl';
import Link from '../Link';
import s from './SiteMenu.css';

export const Component = () =>
  <div style={{ position: 'relative' }}>
    <IconButton className={'mdl-color-text--black'} name="more_vert" id="demo-menu-lower-left" />
    <Menu target="demo-menu-lower-left">
      <MenuItem><Link className={s.menuItem} to="/product">Product</Link></MenuItem>
      <MenuItem><Link className={s.menuItem} to="/works">Works</Link></MenuItem>
      <MenuItem><Link className={s.menuItem} to="/team">Team</Link></MenuItem>
      <MenuItem><Link className={s.menuItem} to="/about">About</Link></MenuItem>
      <MenuItem><Link className={s.menuItem} to="/contact">Contact</Link></MenuItem>
    </Menu>
  </div>
  ;

export default Component;

