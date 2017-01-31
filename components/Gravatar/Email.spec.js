/* eslint-env mocha */
/* eslint
 no-console: 0, no-unused-expressions: 0, padded-blocks: 0, prefer-arrow-callback: 0,
 func-names: 0
 */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Email from './Email';

describe('<Email>', function () {
  it('should have an input for the email', function () {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', function () {
    const wrapper = shallow(<Email />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for handleEmailChange and fetchGravatar', function () {
    const emptyFunc = () => {};
    const wrapper = shallow(<Email fetchGravatar={emptyFunc} handleEmailChange={emptyFunc} />);
    expect(wrapper.instance().props.handleEmailChange).to.not.be.undefined;
    expect(wrapper.instance().props.fetchGravatar).to.not.be.undefined;
  });
});
