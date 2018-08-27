import { noop } from './index';

describe('constants', () => {
  it('noop should not change', () => {
    expect(noop()).toMatchSnapshot();
  });
});
