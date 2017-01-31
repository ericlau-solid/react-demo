/* eslint-env mocha */
/* eslint
 no-console: 0, no-unused-expressions: 0, padded-blocks: 0, prefer-arrow-callback: 0,
 func-names: 0
 */
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import md5 from 'md5';
import { setGravatarEmail, setFetchedStatus } from '../../src/home/homeActions';
import { GravatarComponent as Gravatar, mapStateToProps, mapDispatchToProps } from './Gravatar';
import Avatar from './Avatar';
import Email from './Email';

describe('<Gravatar />', () => {
  it('contains an <Avatar/> component', function () {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email/> component', function () {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar />);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state and fire onFetchGravatar on clicking fetch', function () {
    const fetchGravatar = sinon.spy();
    const wrapper = mount(<Gravatar email={'hello@ifelse.io'} onFetchGravatar={fetchGravatar} />);

    wrapper.find('button').simulate('click');

    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('hello@ifelse.io')}?s=200`);
    expect(fetchGravatar).to.have.property('callCount', 1);
  });

  it('should fire onEmailChange with correct value when input field changes', function () {
    const emailChange = sinon.spy();
    const wrapper = mount(<Gravatar email={'hello@ifelse.io'} onEmailChange={emailChange} />);

    wrapper.find('input').simulate('change', { target: { value: 'foo' } });

    expect(emailChange).to.have.property('callCount', 1);
    expect(emailChange.calledWith('foo')).to.be.true;
  });

  it('mapStateToProps should retrieve gravatarEmail from state and map to email prop', function () {
    const testEmail = 'test@example.com';
    const state = {
      home: {
        gravatarEmail: testEmail,
      },
    };
    const expected = {
      email: testEmail,
    };

    const actual = mapStateToProps(state);

    expect(actual).to.deep.equal(expected);
  });

  it('mapDispatchToProps should map onEmailChange prop', function () {
    const dispatch = sinon.spy();
    const dispatchToProps = mapDispatchToProps(dispatch);

    dispatchToProps.onEmailChange('someone@foo.com');

    expect(dispatch).to.have.property('callCount', 1);
    expect(dispatch.calledWith(setGravatarEmail('someone@foo.com'))).to.be.true;
  });

  it('mapDispatchToProps should map onFetchGravatar prop', function () {
    const dispatch = sinon.spy();
    const dispatchToProps = mapDispatchToProps(dispatch);

    dispatchToProps.onFetchGravatar();

    expect(dispatch).to.have.property('callCount', 1);
    expect(dispatch.calledWith(setFetchedStatus(true))).to.be.true;
  });
});
