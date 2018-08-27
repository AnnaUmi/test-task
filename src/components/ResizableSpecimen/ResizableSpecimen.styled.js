import styled from 'styled-components';

const SLIDER_WIDTH = 32;
export const SLIDER_OFFSET = SLIDER_WIDTH - 5;

export const ResizableContainer = styled.div`
  width: calc(100% - ${SLIDER_OFFSET}px);
`;

export const ResizableSlider = styled.div`
  height: 100%;
  flex: 0 0 auto;
  justify-content: center;
  align-items: center;
  width: ${SLIDER_WIDTH}px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #fff;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
  color: #5c6ac4;
  cursor: ew-resize;
`;

export const iFrameStyles = {
  width: '100%',
  border: 'none',
};

export const resizeableStyleProps = {
  boxSizing: 'content-box',
  backgroundColor: '#f4f5fa',
  borderRadius: '6px',
  padding: '20px',
  paddingRight: '25px',
};

export const Toggle = styled.span`
  position: absolute;
  right: 5px;
  color: #999;
  top: -25px;
  font-weight: 600;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
`;
