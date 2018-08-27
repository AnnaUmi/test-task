import React from 'react';
import PropTypes from 'prop-types';
import 'jest-styled-components';

import reactElementToString from './reactElementToString';

const MockReactElement = ({ children }) => <div>{children}</div>;

MockReactElement.propTypes = {
  children: PropTypes.node.isRequired,
};

describe('reactElementToString ', () => {
  it('should render children', () => {
    expect(reactElementToString(<div>foo</div>)).toBe('<div>\n  foo\n</div>');
  });

  it('should render nested elements', () => {
    expect(
      reactElementToString(
        <div>
          <div>foo</div>
        </div>
      )
    ).toBe('<div>\n  <div>\n    foo\n  </div>\n</div>');
  });

  it('should render elements without children', () => {
    expect(reactElementToString(<div />)).toBe('<div />');
  });

  it('should format prop', () => {
    expect(reactElementToString(<div foo="bar" />)).toBe("<div foo='bar' />");
    expect(reactElementToString(<div foo />)).toBe('<div foo />');
    expect(reactElementToString(<div foo bar={1} />)).toBe('<div\n  bar={1}\n  foo\n />');
    expect(reactElementToString(<div foo bar={undefined} />)).toBe('<div foo />');
    expect(reactElementToString(<div foo bar={null} />)).toBe('<div\n  bar={null}\n  foo\n />');
  });

  it('should skip stringify on error', () => {
    const foo = {};
    foo.foo = foo;
    expect(reactElementToString(<div foo={foo} />)).toEqual(
      expect.stringContaining(`Couldn't stringify React Element`)
    );
  });

  it('should NOT crash if no element was provided', () => {
    expect(reactElementToString()).toBe('');
  });

  it('should render react elements', () => {
    expect(
      reactElementToString(
        <MockReactElement>
          <span>test</span>
        </MockReactElement>
      )
    );
  });

  it('should render when react element is an attribute', () => {
    const el = <div>test</div>;
    expect(
      reactElementToString(
        <MockReactElement render={el}>
          <span>test</span>
        </MockReactElement>
      )
    );
  });
});
