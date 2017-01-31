/* eslint-env mocha */
/* eslint
 no-console: 0, no-unused-expressions: 0, padded-blocks: 0, prefer-arrow-callback: 0,
 func-names: 0, import/no-extraneous-dependencies: 0
 */
import { expect } from 'chai';
import { isFSA } from 'flux-standard-action';
import { SET_FETCHED_STATUS, SET_GRAVATAR_EMAIL, setFetchedStatus, setGravatarEmail } from './homeActions';

describe('HomeActions ', () => {
  it('setFetchedStatus returns correct action object', function () {
    const testStatus = true;
    const expected = {
      type: SET_FETCHED_STATUS,
      payload: testStatus,
    };

    const actual = setFetchedStatus(testStatus);

    expect(isFSA(actual)).to.be.true;
    expect(actual).to.deep.equal(expected);
  });
  it('setGravatarEmail returns correct action object', function () {
    const testData = 'me@ericlau.net';
    const expected = {
      type: SET_GRAVATAR_EMAIL,
      payload: testData,
    };

    const actual = setGravatarEmail(testData);

    expect(isFSA(actual)).to.be.true;
    expect(actual).to.deep.equal(expected);
  });
});
