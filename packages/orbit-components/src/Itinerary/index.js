// @flow
import * as React from "react";
import styled from "styled-components";

import { ItineraryProvider } from "./context";

// import compose from "../utils/functions/compose";
import type { Props } from ".";

// grid-template-areas:
// "place place place"
// "details details details"
// "aligned";

const GridLayoutStyled = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: auto auto 3fr;
`;

const Itinerary = ({ children }: Props) => {
  const content = React.Children.toArray(children);

  return content && content.length > 0 ? (
    <ItineraryProvider>
      <GridLayoutStyled>
        {React.Children.map(content, el => {
          if (!React.isValidElement(el)) return null;
          return el;
        })}
      </GridLayoutStyled>
    </ItineraryProvider>
  ) : null;
};

export default Itinerary;
