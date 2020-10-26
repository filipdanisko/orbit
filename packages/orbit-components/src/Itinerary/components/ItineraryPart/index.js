// @flow
import * as React from "react";

import { ItineraryPartProvider } from "./context";
import ItineraryPartStatus from "./ItineraryPartStatus";

import type { Props } from ".";

const ItineraryPart = ({ status, label, children }: Props) => {
  const WithStatus = (comp: React.Node) =>
    status ? (
      <ItineraryPartStatus type={status} label={label}>
        {comp}
      </ItineraryPartStatus>
    ) : (
      comp
    );

  const content = React.Children.toArray(children);

  return content && content.length > 0
    ? React.Children.map(WithStatus(content), (el, i) => {
        if (!React.isValidElement(el)) return null;

        return (
          <ItineraryPartProvider
            last={i + 1 === content.length}
            isNextPresent={!!content[i + 1]}
            index={i}
          >
            {el}
          </ItineraryPartProvider>
        );
      })
    : null;
};

export default ItineraryPart;

export { default as ItineraryPartStatus } from "./ItineraryPartStatus";
export { default as ItineraryPartPlace } from "./ItineraryPartPlace";
export { default as ItineraryPartDetails } from "./ItineraryPartDetails";
