// @flow
import React from "react";
import { screen, render } from "@testing-library/react";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import theme from "../../defaultTheme";
import {
  TOKENS,
  DIRECTION as DIRECTIONS,
  POSITION as POSITIONS,
  JUSTIFY,
  ALIGN,
  TEXT_ALIGN,
  ELEVATION,
} from "../consts";
import Box from "..";

const dataTest = "test";

describe("#Box", () => {
  it("should have basic props", () => {
    render(
      <Box
        dataTest={dataTest}
        color="blueDark"
        padding="medium"
        margin="medium"
        maxWidth="300px"
        maxHeight="100px"
        display="block"
        background="cloudLight"
      >
        kek
      </Box>,
    );

    const el = screen.getByTestId(dataTest);
    const getOmittedHex = hex =>
      convertHexToRgba(hex, NaN).replace(", NaN", "").replace("rgba", "rgb");

    expect(el).toBeInTheDocument();
    expect(el).toHaveStyle({ color: getOmittedHex(theme.orbit.paletteBlueDark) });
    expect(el).toHaveStyle({ background: getOmittedHex(theme.orbit.paletteCloudLight) });
    expect(el).toHaveStyle({ padding: TOKENS.medium });
    expect(el).toHaveStyle({ margin: TOKENS.medium });
    expect(el).toHaveStyle({ display: "block" });
    expect(el).toHaveStyle({ "max-width": "300px" });
    expect(el).toHaveStyle({ "max-height": "100px" });
  });

  it("should have display flex", () => {
    render(
      <Box dataTest={dataTest} display="flex" wrap="wrap" direction="row" grow={0} shrink={0}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ display: "flex" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-direction": "row" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-shrink": "0" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-grow": "0" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-wrap": "wrap" });
  });

  it("should have directions", () => {
    const test = Object.keys(DIRECTIONS).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" direction={DIRECTIONS[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    expect(testEl(0)).toHaveStyle({ "flex-direction": "row" });
    expect(testEl(1)).toHaveStyle({ "flex-direction": "column" });
    expect(testEl(2)).toHaveStyle({ "flex-direction": "row-reverse" });
    expect(testEl(3)).toHaveStyle({ "flex-direction": "column-reverse" });
  });

  it("should have positions", () => {
    const test = Object.keys(POSITIONS).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} position={POSITIONS[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    expect(testEl(0)).toHaveStyle({ position: "absolute" });
    expect(testEl(1)).toHaveStyle({ position: "relative" });
    expect(testEl(2)).toHaveStyle({ position: "fixed" });
  });

  it("should have justify-content", () => {
    const test = Object.keys(JUSTIFY).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" justify={JUSTIFY[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    expect(testEl(0)).toHaveStyle({ "justify-content": "center" });
    expect(testEl(1)).toHaveStyle({ "justify-content": "flex-start" });
    expect(testEl(2)).toHaveStyle({ "justify-content": "flex-end" });
    expect(testEl(3)).toHaveStyle({ "justify-content": "space-between" });
    expect(testEl(4)).toHaveStyle({ "justify-content": "space-around" });
  });

  it("should have align", () => {
    const test = Object.keys(ALIGN).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" align={ALIGN[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    expect(testEl(0)).toHaveStyle({ "align-items": "flex-start" });
    expect(testEl(1)).toHaveStyle({ "align-items": "flex-end" });
    expect(testEl(2)).toHaveStyle({ "align-items": "center" });
    expect(testEl(3)).toHaveStyle({ "align-items": "stretch" });
  });

  it("should have textAlign", () => {
    const test = Object.keys(TEXT_ALIGN).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" textAlign={TEXT_ALIGN[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    expect(testEl(0)).toHaveStyle({ "text-align": "left" });
    expect(testEl(1)).toHaveStyle({ "text-align": "right" });
    expect(testEl(2)).toHaveStyle({ "text-align": "center" });
  });

  it("should have left, right, top, bottom", () => {
    render(
      <Box dataTest={dataTest} top="10px" left="5px" right="0" bottom="0">
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ top: "10px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ bottom: "0px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ left: "5px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ right: "0px" });
  });

  it("should have elevation", () => {
    const test = Object.keys(ELEVATION).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" elevation={ELEVATION[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    const trimSpaces = val => val.replace(/, /g, ",");

    expect(testEl(0)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowAction) });
    expect(testEl(1)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowFixed) });
    expect(testEl(2)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowRaised) });
    expect(testEl(3)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowOverlay) });
  });
});
