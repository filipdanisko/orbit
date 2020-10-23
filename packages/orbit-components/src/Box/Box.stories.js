// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select, object } from "@storybook/addon-knobs";

import Text from "../Text";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import {
  DISPLAY,
  WRAP,
  SHRINK,
  GROW,
  OVERFLOW,
  COLORS,
  DIRECTION,
  ALIGN,
  SPACINGS,
  TEXT_ALIGN,
  JUSTIFY,
  WIDTH_AND_HEIGHT,
  ELEVATION,
  BORDER_RADIUS,
  POSITION,
} from "./consts";

import Box from "./index";

const DEFAULT_COLOR = "blueDark";

storiesOf("Box", module)
  .add(
    "Default",
    () => {
      const children = text("Children", "Default box");
      const as = text("As", "span");
      return (
        <Box as={as}>
          <Text>{children}</Text>
        </Box>
      );
    },
    {
      info:
        "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add("Overflow", () => {
    const overflow = select("overflow", OVERFLOW, OVERFLOW.AUTO);

    return (
      <Box
        background={DEFAULT_COLOR}
        overflow={overflow}
        color="cloudLight"
        padding="large"
        maxWidth="300px"
      >
        <Text type="white">Text</Text>
      </Box>
    );
  })
  .add("TextAlign", () => {
    const textAlign = select("textAlign", TEXT_ALIGN, TEXT_ALIGN.CENTER);

    return (
      <Box
        background={DEFAULT_COLOR}
        textAlign={textAlign}
        color="cloudLight"
        padding="large"
        maxWidth="300px"
      >
        <Text type="white">Text</Text>
      </Box>
    );
  })
  .add("Positions", () => {
    const position = select("position", POSITION, POSITION.RELATIVE);
    const top = text("top", null);
    const left = text("left", null);
    const right = text("right", null);
    const bottom = text("bottom", null);

    return (
      <Box
        background={DEFAULT_COLOR}
        height="full"
        maxHeight="100px"
        maxWidth="100px"
        width="full"
        top={top}
        left={left}
        right={right}
        bottom={bottom}
        position={position}
      >
        <div
          style={{
            height: "50px",
          }}
        />
      </Box>
    );
  })
  .add("Padding & Margin", () => {
    const margin = select("margin", SPACINGS, SPACINGS[0]);
    const padding = select("padding", SPACINGS, SPACINGS[0]);

    return (
      <Box background={DEFAULT_COLOR} maxWidth="300px" margin={margin} padding={padding}>
        <div
          style={{
            height: "50px",
          }}
        />
      </Box>
    );
  })
  .add("BorderRadius", () => {
    const radius = select("borderRadius", BORDER_RADIUS, BORDER_RADIUS.NORMAL);

    return (
      <Box background={DEFAULT_COLOR} maxWidth="150px" borderRadius={radius}>
        <div
          style={{
            height: "50px",
          }}
        />
      </Box>
    );
  })
  .add("Colors", () => {
    const color = select("colors", COLORS, COLORS[10]);
    const background = select("background", COLORS, DEFAULT_COLOR);

    return (
      <Box display="flex" justify="center" align="center" background={background} color={color}>
        <div
          style={{
            height: "100px",
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Content
        </div>
      </Box>
    );
  })
  .add("Elevation", () => {
    const elevation = select("elevation", ELEVATION, ELEVATION.ACTION);

    return (
      <Box
        display="flex"
        justify="center"
        maxHeight="100px"
        elevation={elevation}
        maxWidth="300px"
        align="center"
        background="cloudDark"
      >
        <div
          style={{
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Content</Text>
        </div>
      </Box>
    );
  })
  .add("Flex", () => {
    const direction = select("direction", DIRECTION, DIRECTION.ROW);
    const display = select("display", ["flex", "inline-flex"], "flex");
    const align = select("align", ALIGN, ALIGN[0]);
    const justify = select("justify", JUSTIFY, "start");
    const wrap = select("wrap", WRAP, WRAP[0]);

    return (
      <Box
        display={display}
        justify={justify}
        background="blueNormal"
        height="full"
        wrap={wrap}
        align={align}
        direction={direction}
      >
        <div style={{ height: 50, width: 50, background: "#ccc" }} />
        <div style={{ height: 50, width: 50, background: "#ccc" }} />
      </Box>
    );
  })
  .add(
    "Playground",
    () => {
      const children = text("Children", "Box");
      const display = select("display", DISPLAY, DISPLAY.FLEX);
      const overflow = select("overflow", OVERFLOW, OVERFLOW.VISIBLE);
      const wrap = select("wrap", WRAP, WRAP[0]);
      const shrink = select("shrink", SHRINK, SHRINK[0]);
      const grow = select("grow", GROW, GROW[0]);
      const align = select("align", ALIGN, ALIGN.START);
      const textAlign = select("text-align", TEXT_ALIGN, TEXT_ALIGN.LEFT);
      const justify = select("justify", JUSTIFY, JUSTIFY.CENTER);
      const direction = select("direction", DIRECTION, DIRECTION.ROW);
      const width = select("width", WIDTH_AND_HEIGHT, WIDTH_AND_HEIGHT.AUTO);
      const maxWidth = text("max-width", "100px");
      const height = select("height", WIDTH_AND_HEIGHT, WIDTH_AND_HEIGHT.AUTO);
      const maxHeight = text("max-height", "100px");
      const elevation = select("elevation", ELEVATION, ELEVATION.ACTION);
      const borderRadius = select("border-radius", BORDER_RADIUS, BORDER_RADIUS.NORMAL);
      const position = select("position", POSITION, POSITION.RELATIVE);
      const top = text("top", "10px");
      const right = text("right", "10px");
      const bottom = text("left", "10px");
      const left = text("bottom", "10px");
      const margin = select("margin", SPACINGS, SPACINGS[0]);
      const padding = object("padding", { top: "small", left: "x-small", right: "xx-small" }, "");

      return (
        <Box
          display={display}
          wrap={wrap}
          shrink={shrink}
          grow={grow}
          align={align}
          textAlign={textAlign}
          direction={direction}
          justify={justify}
          width={width}
          maxWidth={maxWidth}
          height={height}
          maxHeight={maxHeight}
          elevation={elevation}
          borderRadius={borderRadius}
          position={position}
          top={top}
          right={right}
          bottom={bottom}
          left={left}
          overflow={overflow}
          padding={padding}
          margin={margin}
          color="productLight"
          background="inkLight"
        >
          {children}
        </Box>
      );
    },
    {
      info: "Some description about this type of component. ",
    },
  )
  .add(
    "RTL",
    () => (
      <RenderInRtl>
        <Box>Box in RTL</Box>
      </RenderInRtl>
    ),
    {
      info: "This is a preview of this component in RTL setup.",
    },
  );
