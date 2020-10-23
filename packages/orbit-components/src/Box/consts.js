// @flow
import theme from "../defaultTheme";

export const DISPLAY = {
  NONE: "none",
  FLEX: "flex",
  "INLINE-FLEX": "inline-flex",
  BLOCK: "block",
  INLINE: "inline",
  "INLINE-BLOCK": "inline-block",
};

export const WRAP = { WRAP: "wrap", NOWRAP: "nowrap" };

export const DIRECTION = {
  ROW: "row",
  COLUMN: "column",
  "ROW-REVERSE": "row-reverse",
  "COLUMN-REVERSE": "column-reverse",
};

export const SHRINK = [0, 1];

export const GROW = [0, 1];

export const WIDTH_AND_HEIGHT = {
  FULL: "full",
  AUTO: "auto",
};

export const POSITION = { ABSOLUTE: "absolute", RELATIVE: "relative", FIXED: "fixed" };

export const ALIGN = { START: "start", END: "end", CENTER: "center", STRETCH: "stretch" };

export const JUSTIFY = {
  CENTER: "center",
  START: "start",
  END: "end",
  BETWEEN: "between",
  AROUND: "around",
};

export const TEXT_ALIGN = { LEFT: "left", RIGHT: "right", CENTER: "center" };

// TODO: "suppressed", "flat"
export const ELEVATION = { ACTION: "action", FIXED: "fixed", RAISED: "raised", OVERLAY: "overlay" };

export const BORDER_RADIUS = {
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
  RADIUSCIRCLE: "radiusCircle",
};

export const OVERFLOW = { AUTO: "auto", HIDDEN: "hidden", SCROLL: "scroll", VISIBLE: "visible" };

export const COLORS = [
  "productLight",
  "productLightHover",
  "productLightActive",
  "productNormal",
  "productNormalHover",
  "productNormalActive",
  "productDark",
  "productDarkHover",
  "productDarkActive",
  "productDarker",
  "white",
  "whiteHover",
  "whiteActive",
  "cloudLight",
  "cloudLightHover",
  "cloudLightActive",
  "cloudNormal",
  "cloudNormalHover",
  "cloudNormalActive",
  "cloudDark",
  "inkLighter",
  "inkLighterHover",
  "inkLighterActive",
  "inkLight",
  "inkLightHover",
  "inkLightActive",
  "inkNormal",
  "inkNormalHover",
  "inkNormalActive",
  "orangeLight",
  "orangeLightHover",
  "orangeLightActive",
  "orangeNormal",
  "orangeNormalHover",
  "orangeNormalActive",
  "orangeDark",
  "orangeDarkHover",
  "orangeDarkActive",
  "orangeDarker",
  "redLight",
  "redLightHover",
  "redLightActive",
  "redNormal",
  "redNormalHover",
  "redNormalActive",
  "redDark",
  "redDarkHover",
  "redDarkActive",
  "redDarker",
  "greenLight",
  "greenLightHover",
  "greenLightActive",
  "greenNormal",
  "greenNormalHover",
  "greenNormalActive",
  "greenDark",
  "greenDarkHover",
  "greenDarkActive",
  "greenDarker",
  "blueLight",
  "blueLightHover",
  "blueLightActive",
  "blueNormal",
  "blueNormalHover",
  "blueNormalActive",
  "blueDark",
  "blueDarkHover",
  "blueDarkActive",
  "blueDarker",
  "socialFacebook",
  "socialFacebookHover",
  "socialFacebookActive",
];

export const SPACINGS = [
  "none",
  "XXXSmall",
  "XXsmall",
  "Xsmall",
  "small",
  "medium",
  "large",
  "Xlarge",
  "XXlarge",
  "XXXlarge",
];

export const TOKENS = {
  none: null,
  XXXSmall: theme.orbit.spaceXXXSmall,
  XXsmall: theme.orbit.spaceXXSmall,
  Xsmall: theme.orbit.spaceXSmall,
  small: theme.orbit.spaceSmall,
  medium: theme.orbit.spaceMedium,
  large: theme.orbit.spaceLarge,
  Xlarge: theme.orbit.spaceXLarge,
  XXlarge: theme.orbit.spaceXXLarge,
  XXXlarge: theme.orbit.spaceXXXLarge,
};
