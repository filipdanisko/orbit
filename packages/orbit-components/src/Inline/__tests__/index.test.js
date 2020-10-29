// @flow
import React from "react";
import { screen, render } from "@testing-library/react";

import theme from "../../defaultTheme";
import Inline from "..";

const dataTest = "test";

const tokens = {
  none: "",
  XXXsmall: theme.orbit.spaceXXXSmall,
  XXsmall: theme.orbit.spaceXXSmall,
  Xsmall: theme.orbit.spaceXSmall,
  small: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  Xlarge: theme.orbit.spaceXLarge,
  XXlarge: theme.orbit.spaceXXLarge,
  XXXlarge: theme.orbit.spaceXXXLarge,
};

const Elements = () => (
  <>
    <div data-test="child-0">kek</div>
    <div>bur</div>
    <div>cheburek</div>
    <div>blin</div>
  </>
);

describe("#Inline", () => {
  it("should have props", () => {
    render(
      <Inline align="center" justify="start" dataTest={dataTest}>
        <Elements />
      </Inline>,
    );
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    const styles = screen.getByTestId(dataTest);
    expect(styles).toHaveStyle({ alignItems: "center" });
    expect(styles).toHaveStyle({ justifyContent: "flex-start" });
  });

  it("should have spacings", () => {
    const spacings = Object.keys(tokens).map(token => (
      <Inline key={token} align="start" justify="center" spacing={token} dataTest={dataTest}>
        <div data-test={token} style={{ marginLeft: tokens[token] }}>
          kek
        </div>
        <div>bur</div>
      </Inline>
    ));

    expect(render(spacings[0]).getByTestId("none")).toHaveStyle({
      marginLeft: "",
    });

    expect(render(spacings[1]).getByTestId("XXXsmall")).toHaveStyle({
      marginLeft: tokens.XXXsmall,
    });

    expect(render(spacings[2]).getByTestId("XXsmall")).toHaveStyle({
      marginLeft: tokens.XXsmall,
    });

    expect(render(spacings[3]).getByTestId("Xsmall")).toHaveStyle({
      marginLeft: tokens.Xsmall,
    });

    expect(render(spacings[4]).getByTestId("small")).toHaveStyle({ marginLeft: tokens.small });

    expect(render(spacings[5]).getByTestId("medium")).toHaveStyle({ marginLeft: tokens.medium });

    expect(render(spacings[6]).getByTestId("large")).toHaveStyle({ marginLeft: tokens.large });

    expect(render(spacings[7]).getByTestId("Xlarge")).toHaveStyle({
      marginLeft: tokens.Xlarge,
    });

    expect(render(spacings[8]).getByTestId("XXlarge")).toHaveStyle({
      marginLeft: tokens.XXlarge,
    });

    expect(render(spacings[9]).getByTestId("XXXlarge")).toHaveStyle({
      marginLeft: tokens.XXXlarge,
    });
  });
});
