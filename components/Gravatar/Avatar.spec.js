/* eslint-env mocha */
/* eslint
 no-console: 0, no-unused-expressions: 0, padded-blocks: 0, prefer-arrow-callback: 0,
 func-names: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Avatar from './Avatar';

describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<Avatar email={'sdf@sfd.com'} src={'foo'} />);
    expect(wrapper.instance().props.email).to.equal('sdf@sfd.com');
    expect(wrapper.instance().props.src).to.equal('foo');
    expect(wrapper.contains(<em>sdf@sfd.com</em>)).to.be.true;
  });
});
