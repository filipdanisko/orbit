// @flow
import * as React from "react";
import styled from "styled-components";

import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import type { Props } from "./index.js.flow";
import { StyledListWrapper } from "./PricingTableItem";
import PricingTableContext from "./PricingTableContext";

const StyledPricingTable = styled.div``;

const PricingTable = ({ children, dataTest, activeElement, hasError, desktopRadio }: Props) => {
  const { isDesktop } = useMediaQuery();
  const resolveBasis = item => {
    if (item > 0) {
      return `${Math.floor(100 / item)}%`;
    }
    return `100%`;
  };

  return (
    <>
      {isDesktop !== null && (
        <StyledPricingTable data-test={dataTest}>
          <Stack
            flex
            grow
            spaceAfter="medium"
            spacing="condensed"
            align="stretch"
            desktop={{ spacing: "natural", spaceAfter: "none" }}
            justify="center"
          >
            <PricingTableContext.Provider
              value={{
                basis: !isDesktop ? resolveBasis(React.Children.count(children)) : 0,
                hasError,
                desktopRadio,
              }}
            >
              {children}
            </PricingTableContext.Provider>
          </Stack>
          {!isDesktop && children && (
            <Stack spacing="condensed">
              <StyledListWrapper>
                {React.Children.map(children, (child, i) => {
                  if (i === activeElement) {
                    return (
                      <PricingTableContext.Provider
                        value={{
                          isContent: true,
                        }}
                      >
                        {child}
                      </PricingTableContext.Provider>
                    );
                  }
                  return null;
                })}
              </StyledListWrapper>
            </Stack>
          )}
        </StyledPricingTable>
      )}
    </>
  );
};

export default PricingTable;
export { default as PricingTableItem } from "./PricingTableItem";
