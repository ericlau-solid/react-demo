/* eslint-env mocha */
/* eslint
 no-console: 0, no-unused-expressions: 0, padded-blocks: 0, prefer-arrow-callback: 0,
 func-names: 0, import/no-extraneous-dependencies: 0
 */
import { expect } from 'chai';
import { deepFreeze } from './../../tools/testHelpers';
import { setGravatarEmail, setFetchedStatus } from './homeActions';
import homeReducer from './homeReducer';

describe('HomeReducer ', () => {
  it('has expected initial state', function () {
    const expected = {
      gravatarEmail: '',
      fetched: false,
    };

    const actual = homeReducer(undefined, { type: 'unknown_action_name' });

    expect(actual).to.deep.equal(expected);
  });
  it('changes state correctly when set gravatar email action is called', function () {
    const data = 'me@ericlau.net';
    const expected = {
      gravatarEmail: data,
      fetched: true,
    };
    const initialState = {
      gravatarEmail: '',
      fetched: true,
    };
    const action = setGravatarEmail(data);
    deepFreeze(initialState);
    deepFreeze(action);

    const actual = homeReducer(initialState, action);

    expect(actual).to.deep.equal(expected);
  });
  it('changes state correctly when set fetched status action is called', function () {
    const data = 'me@ericlau.net';
    const expected = {
      gravatarEmail: data,
      fetched: false,
    };
    const initialState = {
      gravatarEmail: data,
      fetched: true,
    };
    const action = setFetchedStatus(false);
    deepFreeze(initialState);
    deepFreeze(action);

    const actual = homeReducer(initialState, action);

    expect(actual).to.deep.equal(expected);
  });
});

