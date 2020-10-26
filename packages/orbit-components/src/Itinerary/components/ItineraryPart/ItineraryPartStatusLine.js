// @flow
import React from "react";
import styled from "styled-components";

import ArrowDown from "../../../icons/ArrowDown";
import Circle from "../../../icons/Circle";
import defaultTheme from "../../../defaultTheme";

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledLine = styled.div`
  position: absolute;
  top: 15px;
  width: 2px;
  z-index: -1;
  height: 100%;
  left: calc(50% - 1px);
  background: ${({ theme }) => theme.orbit.paletteCloudNormal};
`;

StyledLine.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  +isDetails?: boolean,
|};

const ItineraryPartStatusLine = ({ isDetails }: Props) => {
  return (
    <StyledWrapper>
      {isDetails ? <ArrowDown /> : <Circle size="small" color="secondary" />}
      <StyledLine />
    </StyledWrapper>
  );
};

export default ItineraryPartStatusLine;
