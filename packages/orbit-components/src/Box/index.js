// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { DEVICES as DEVICES_CONSTS } from "../utils/mediaQuery/consts";
import normalize from "./normalize";

import type { Props } from "./index";

const StyledBox = styled(({ className, as: Element, children, dataTest }) => (
  <Element className={className} data-test={dataTest}>
    {children}
  </Element>
)).attrs(({ dataTest }) => ({ "data-test": dataTest }))`
  // map to mediaQueries
  ${({ viewports }) => {
    return Object.entries(viewports).map(([query, value]: any) => {
      // DEVICES_CONSTS[0] === "smallMobile"
      if (query !== DEVICES_CONSTS[0] && typeof value !== "undefined") {
        return media[query](css`
          ${normalize(value)}
        `);
      }
      // smallMobile is not in media obj so it needs to be rendered as a default
      return normalize(value);
    });
  }}
`;

StyledBox.defaultProps = {
  theme: defaultTheme,
};

const Box = ({
  as = "div",
  mediumMobile,
  largeMobile,
  tablet,
  desktop,
  largeDesktop,
  children,
  dataTest,
  className,
  ...smallMobile
}: Props) => {
  const viewports = { smallMobile, mediumMobile, largeMobile, tablet, desktop };

  return (
    <StyledBox as={as} dataTest={dataTest} className={className} viewports={viewports}>
      {children}
    </StyledBox>
  );
};
export default Box;
