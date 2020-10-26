// @flow
import React from "react";
import styled from "styled-components";

import { FirstColumnStyled, SecondColumnStyled, ThirdColumnStyled, line } from "./primitives/Grid";
import Text from "../../../Text";
import ArrowDown from "../../../icons/ArrowDown";
// import Slide from "../../../utils/Slide";
// import useBoundingRect from "../../../hooks/useBoundingRect";
// import { usePart } from "./context";

import type { PartDetailsProps as Props } from ".";

const StyledLine = styled.div`
  ${line};
`;

const ItineraryPartDetails = ({ duration, summary }: Props) => {
  // const { expanded, onExpand } = usePart();
  // const [{ height }, ref] = useBoundingRect({ height: expanded ? null : 0 });

  return (
    <>
      <FirstColumnStyled>
        <Text weight="bold">{duration}</Text>
      </FirstColumnStyled>
      <SecondColumnStyled>
        <ArrowDown />
        <StyledLine />
      </SecondColumnStyled>
      <ThirdColumnStyled>
        {summary}
        {/* <Slide maxHeight={height} expanded={expanded}>
          <div ref={ref}>{children}</div>
        </Slide> */}
      </ThirdColumnStyled>
    </>
  );
};

export default ItineraryPartDetails;
