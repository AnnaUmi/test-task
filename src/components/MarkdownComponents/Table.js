import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  border-collapse: collapse;
  width: 100%;
  border-bottom: none;
`;

const TH = styled.th`
  font-style: normal;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.44;
  text-align: left;
  vertical-align: top;
  padding: 16px 16px 16px 0;
`;

const TD = styled.th`
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.44;
  text-align: left;
  vertical-align: top;
  padding: 16px 16px 16px 0;
`;

const P = styled.p`
  font-style: normal;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  color: rgb(51, 51, 51);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.44;
  flex-basis: 100%;
  margin: 0;
`;

const THead = styled.thead`
  border-bottom: 2px solid rgb(214, 214, 214);
`;

const TR = styled.tr`
  border-bottom: 1px solid rgb(214, 214, 214);
`;

const TableComp = props => <Table {...props} />;

const THElement = props => {
  const { children, colspan, rowspan } = props;
  return (
    <TH colSpan={colspan} rowSpan={rowspan}>
      {children && children.props && children.props.children}
    </TH>
  );
};

THElement.propTypes = {
  children: PropTypes.node.isRequired,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
};

THElement.defaultProps = {
  colspan: 1,
  rowspan: 1,
};

const TDElement = props => {
  const { children, colspan, rowspan } = props;
  return (
    <TD colSpan={colspan} rowSpan={rowspan}>
      <P>{children && children.props && children.props.children}</P>
    </TD>
  );
};

TDElement.propTypes = {
  children: PropTypes.node,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
};

TDElement.defaultProps = {
  children: null,
  colspan: 1,
  rowspan: 1,
};

const THeadElement = props => <THead {...props} />;
const TRElement = props => <TR {...props} />;

export { TableComp, THElement, THeadElement, TRElement, TDElement };
