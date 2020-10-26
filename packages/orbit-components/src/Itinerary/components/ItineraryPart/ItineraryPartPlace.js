// @flow
import React from "react";
// import styled from "styled-components";

import { FirstColumnStyled, SecondColumnStyled, ThirdColumnStyled } from "./primitives/Grid";
import Text from "../../../Text";
import Circle from "../../../icons/Circle";
import { usePart } from "./context";

import type { PartPlaceProps as Props } from ".";

const ItineraryPartPlace = ({ date, time, name, designation }: Props) => {
  const { last, isNextPresent } = usePart();

  return (
    <>
      <FirstColumnStyled>
        <Text weight="bold">{time}</Text>
        <Text type="secondary" size="small">
          {date}
        </Text>
      </FirstColumnStyled>
      <SecondColumnStyled last={last} isNextPresent={isNextPresent}>
        <Circle size="small" color="secondary" />
      </SecondColumnStyled>
      <ThirdColumnStyled>
        <Text weight="bold">{name}</Text>
        <Text type="secondary" size="small">
          {designation}
        </Text>
      </ThirdColumnStyled>
    </>
  );
};

export default ItineraryPartPlace;
