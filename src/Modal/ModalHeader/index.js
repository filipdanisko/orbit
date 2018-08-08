// @flow
import * as React from "react";
import styled from "styled-components";

import Text from "../../Text";
import Heading from "../../Heading";
import defaultTokens from "../../defaultTokens";
import media from "../../utils/media";
import { StyledModalSection } from "../ModalSection";

import type { Props } from "./index";

const ModalTitle = styled.div`
  // TODO: create token marginModalTitle and marginModalTitleWithIllustration
  margin: ${({ theme, illustration }) => `${illustration ? theme.orbit.spaceXSmall : "0"} 0 0 0`};
`;

ModalTitle.defaultProps = {
  theme: defaultTokens,
};

const ModalDescription = styled.div`
  margin: ${({ theme }) => `${theme.orbit.spaceXSmall} 0 0 0`};
`;

ModalDescription.defaultProps = {
  theme: defaultTokens,
};

const StyledModalHeader = styled.div`
  width: 100%;
  display: block;
  padding: ${({ theme, illustration, suppressed }) =>
    illustration
      ? `${theme.orbit.spaceXLarge} ${theme.orbit.spaceMedium} ${
          suppressed ? theme.orbit.spaceLarge : "0"
        } ${theme.orbit.spaceMedium}`
      : `${theme.orbit.spaceLarge} ${theme.orbit.spaceMedium} ${
          suppressed ? theme.orbit.spaceLarge : "0"
        } ${theme.orbit.spaceMedium}`};
  border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-sizing: border-box;
  background-color: ${({ suppressed, theme }) =>
    suppressed ? theme.orbit.paletteCloudLight : theme.orbit.paletteWhite};

  & ~ ${StyledModalSection}:first-of-type {
    border-top: ${({ suppressed, theme }) =>
      suppressed && `1px solid ${theme.orbit.paletteCloudNormal}`};
    margin-top: ${({ suppressed }) => suppressed && "0!important"};
  }

  ${media.desktop`
    padding: ${({ theme, illustration, suppressed }) =>
      illustration
        ? `${theme.orbit.spaceXLarge} ${theme.orbit.spaceXXLarge} ${
            suppressed ? theme.orbit.spaceXXLarge : "0"
          } ${theme.orbit.spaceXXLarge}`
        : `${theme.orbit.spaceXXLarge} ${theme.orbit.spaceXXLarge} ${
            suppressed ? theme.orbit.spaceXXLarge : "0"
          } ${theme.orbit.spaceXXLarge}`};
    height: 100%;
  `};
`;

StyledModalHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledModalHeaderContent = styled.div`
  margin-top: ${({ description }) => (description ? "32px" : "16px")};
`;

const ModalHeader = (props: Props) => {
  const { title, illustration, description, children, suppressed } = props;
  return (
    <StyledModalHeader illustration={!!illustration} suppressed={suppressed}>
      {illustration}
      <ModalTitle illustration={!!illustration}>
        <Heading type="title1">{title}</Heading>
        {description && (
          <ModalDescription>
            <Text size="large" element="div">
              {description}
            </Text>
          </ModalDescription>
        )}
      </ModalTitle>
      {children && (
        <StyledModalHeaderContent description={!!description}>{children}</StyledModalHeaderContent>
      )}
    </StyledModalHeader>
  );
};

export default ModalHeader;