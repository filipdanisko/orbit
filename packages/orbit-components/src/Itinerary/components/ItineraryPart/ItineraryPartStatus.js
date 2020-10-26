// @flow
import React from "react";
import styled from "styled-components";

import Alert from "../../../icons/Alert";
import Warning from "../../../icons/AlertCircle";
import Text from "../../../Text";
import Stack from "../../../Stack";
import defaultTheme from "../../../defaultTheme";
import type { ThemeProps } from "../../../defaultTheme";
import { STATUSES } from "./consts";

import type { PartStatusProps as Props, Statuses } from ".";

const resolveColor = (status: Statuses, isHeader?: boolean) => ({ theme }: ThemeProps) => {
  const border = {
    [STATUSES.WARNING]: theme.orbit.colorTextWarning,
    [STATUSES.CRITICAL]: theme.orbit.colorTextCritical,
  };

  const header = {
    [STATUSES.WARNING]: theme.orbit.paletteOrangeLightHover,
    [STATUSES.CRITICAL]: theme.orbit.paletteRedLightHover,
  };

  if (isHeader) return header[status];

  return border[status];
};

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusLarge};
  border-left: 3px solid ${({ type }) => type && resolveColor(type)};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowFixed};
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledStatusHeader = styled.div`
  display: flex;
  padding: 0 8px;
  align-items: center;
  border-radius: 3px ${({ theme }) => theme.orbit.borderRadiusLarge} 0 0;
  background: ${({ type }) => type && resolveColor(type, true)};
`;

StyledStatusHeader.defaultProps = {
  theme: defaultTheme,
};

const ItineraryPartStatus = ({ type, label, children }: Props) => {
  return (
    <StyledWrapper type={type}>
      <StyledStatusHeader type={type}>
        {/* TODO: replace icons with octagon */}
        <Stack inline spacing="condensed" align="center">
          {type === "critical" ? (
            <Alert size="small" color="critical" />
          ) : (
            <Warning size="small" color="warning" />
          )}
          {label && <Text type={type}>{label}</Text>}
        </Stack>
      </StyledStatusHeader>
      <Stack flex direction="column">
        {children}
      </Stack>
    </StyledWrapper>
  );
};

export default ItineraryPartStatus;
