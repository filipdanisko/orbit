// @flow
import * as React from "react";

import type { Context } from "./context";

export const ItineraryContext: React.Context<Context> = React.createContext({
  smth: null,
});

export const ItineraryProvider = ({ children }: {| children: React.Node |}) => {
  const [types, setTypes] = React.useState(null);

  return (
    <ItineraryContext.Provider value={{ types, setTypes }}>{children}</ItineraryContext.Provider>
  );
};
