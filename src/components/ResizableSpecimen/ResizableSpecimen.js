import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer } from 'react-dom';
import raf from 'raf';
import Resizable from 're-resizable';
import reactElementToString from '../HighlightedCode/reactElementToString';
import HighlightedCode from '../HighlightedCode';

import {
  ResizableSlider,
  ResizableContainer,
  resizeableStyleProps,
  iFrameStyles,
  Toggle,
  Container,
} from './ResizableSpecimen.styled';

const Slider = () => <ResizableSlider />;

const resizeEnableProps = {
  top: false,
  right: true,
  bottom: false,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

export default class ResizableSpecimen extends Component {
  static resizeEnableProps = resizeEnableProps;

  static slider = Slider;

  static propTypes = {
    children: PropTypes.node.isRequired,
    responsive: PropTypes.bool,
  };

  static defaultProps = {
    responsive: false,
  };

  state = {
    iframeHeight: 0,
    showCodeSnippet: false,
  };

  componentDidMount() {
    this.renderFrameContents();
    this.updateMaResizableWidth();
  }

  updateMaResizableWidth = () => {
    const maxResizableWidth = this.container.clientWidth;
    this.setState({ maxResizableWidth });
  };

  updateHeight = () => {
    const doc = this.iframe.contentDocument;
    const iframeHeight = doc.body.firstChild.offsetHeight;
    this.setState({ iframeHeight });
  };

  toggleCodeSnippet = () => {
    const { showCodeSnippet } = this.state;
    this.setState({
      showCodeSnippet: !showCodeSnippet,
    });
  };

  renderFrameContents = () => {
    if (!this.iframe) {
      return;
    }

    const { children } = this.props;
    const doc = this.iframe.contentDocument;

    if (doc && doc.readyState === 'complete') {
      const contents = <div>{children}</div>;

      // React warns when you render directly into the body since browser
      // extensions also inject into the body and can mess up React.
      doc.body.innerHTML = '<div></div>';
      doc.head.innerHTML = '<style>html,body{margin:0;padding:0;}<style>';

      const base = doc.createElement('base');
      base.setAttribute('href', window.location.href);
      doc.head.appendChild(base);

      // Clone styles from parent document head into the iframe
      const pageStyles = Array.from(document.querySelectorAll('head > style'));

      pageStyles.forEach(s => {
        const clonedNode = s.cloneNode(true);

        // Take styles inserted with insertRule and turn into regular styles inside a style tag
        // cloneNode does not clone styles inserted with insertRule
        // This fix allows to render style components inside an iframe in production
        const insertedStyles = s.sheet.cssRules;
        const insertedStylesArray = Array.prototype.slice.call(insertedStyles);
        insertedStylesArray.forEach(cssRule => {
          clonedNode.textContent += cssRule.cssText;
        });

        doc.head.appendChild(clonedNode);
      });

      renderSubtreeIntoContainer(this, contents, doc.body.firstChild, () => {
        const onRender = content => {
          this.contentHeight = content.offsetHeight;
          this.setState({ iframeHeight: this.contentHeight });
        };

        raf(() => {
          onRender(doc.body.firstChild);
        });
      });
    } else {
      setTimeout(this.renderFrameContents, 0);
    }
  };

  render() {
    const { children, responsive } = this.props;
    const { iframeHeight, maxResizableWidth, showCodeSnippet } = this.state;
    const code = reactElementToString(children);

    return (
      <Container>
        <Toggle onClick={this.toggleCodeSnippet}>{'<>'}</Toggle>
        <ResizableContainer
          innerRef={el => {
            this.container = el;
          }}
        >
          <Resizable
            enable={ResizableSpecimen.resizeEnableProps}
            style={resizeableStyleProps}
            minWidth="320"
            maxWidth={maxResizableWidth}
            handleComponent={{ right: ResizableSpecimen.slider }}
            onResize={() => responsive && this.updateHeight()}
          >
            {responsive && (
              <iframe
                title="demo"
                style={{ ...iFrameStyles, height: `${iframeHeight}px` }}
                ref={ref => {
                  this.iframe = ref;
                }}
              />
            )}
            {/* to get styled components styles injected to the page */}
            <div style={{ display: responsive ? 'none' : 'block' }}>{children}</div>
          </Resizable>
        </ResizableContainer>
        <HighlightedCode code={code} isVisible={showCodeSnippet} />
      </Container>
    );
  }
}
