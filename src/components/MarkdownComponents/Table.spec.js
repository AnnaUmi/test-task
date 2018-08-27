import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { TableComp, THElement, THeadElement, TRElement, TDElement } from './Table';

describe('Table', () => {
  it('TableComp should match snapshot', () => {
    const tree = renderer.create(<TableComp />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('THElement should match snapshot', () => {
    const props = {
      colspan: 3,
      rowspan: 3,
      children: {
        props: {
          children: 'test data',
        },
      },
    };
    const tree = renderer.create(<THElement {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('THeadElement should match snapshot', () => {
    const tree = renderer.create(<THeadElement />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('TRElement should match snapshot', () => {
    const tree = renderer.create(<TRElement />);

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('TDElement should match snapshot when we pass children', () => {
    const props = {
      colspan: 3,
      rowspan: 3,
      children: {
        props: {
          children: 'test data',
        },
      },
    };
    const tree = renderer.create(<TDElement {...props} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
