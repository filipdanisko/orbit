// @flow
import styled, { css } from "styled-components";

export const line = css`
  position: absolute;
  background: #ccc;
  width: 2px;
  top: 0;
  z-index: -1;
  left: calc(50% - 1px);
  height: 100%;
`;

const detailsMixin = css`
  ${({ details }) =>
    details &&
    `
    `}
`;

const gridItem = css`
  display: grid;
  align-items: center;
`;

export const FirstColumnStyled = styled.div`
  ${gridItem}
  ${detailsMixin};
  grid-column-start: 1;
`;

export const SecondColumnStyled = styled.div`
  ${gridItem};
  position: relative;
  justify-content: center;
  grid-column-start: 2;
  ${detailsMixin};
  ${({ isNextPresent }) =>
    isNextPresent &&
    `&:after {
    ${line};
    ${({ last }) => (last ? `height: unset; bottom: 16px` : `top: 16px`)};
    content: "";
  }`}
`;

export const ThirdColumnStyled = styled.div`
  ${gridItem};
  ${detailsMixin};
  grid-column-start: 3;
`;
