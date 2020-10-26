// @flow
// @flow
import * as React from "react";

import type { Context, ProviderProps } from "./context";

export const ItineraryPartContext: React.Context<Context> = React.createContext({
  index: 0,
  last: false,
  isNextPresent: false,
  onExpand: () => {},
  expanded: false,
});

export const ItineraryPartProvider = ({ children, index, last, isNextPresent }: ProviderProps) => {
  const [isExpanded, setExpanded] = React.useState(null);

  return (
    <ItineraryPartContext.Provider
      value={{ onExpand: setExpanded, expanded: isExpanded, index, last, isNextPresent }}
    >
      {children}
    </ItineraryPartContext.Provider>
  );
};

export const usePart = () => React.useContext(ItineraryPartContext);
