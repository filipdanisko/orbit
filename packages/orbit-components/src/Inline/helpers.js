// @flow
import { left } from "../utils/rtl";
import type { Theme, ThemeProps } from "../defaultTheme";

import type { SpacingToken, Position } from "./index";

type Prop = "align" | "justify" | "spacing";

export const formatCSS = (key: string, value: string): string => `${key}: ${value};`;

const getJustify = justify => {
  if (justify === "start") return "flex-start";
  if (justify === "end") return "flex-end";

  return "center";
};

export const normalizeSpacing = (el: SpacingToken, theme: Theme): string => {
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

  if (el !== "none") {
    return `
      margin-${left({ theme })}: -${tokens[el]};
      margin-top: -${tokens[el]};

      & > * {
        margin-${left({ theme })}: ${tokens[el]};
        margin-top: ${tokens[el]};
      }
    `;
  }

  return "";
};

type PropObject = { [key: Prop]: Position };

// TODO: kinda weird, but it's well known problem in flow with Object.entries
export const normalize = (object: PropObject) => ({ theme }: ThemeProps) => {
  if (!object) return null;

  return Object.entries(object).reduce((acc, [key, val]: [string, any]) => {
    if (key === "justify") {
      return [...acc, formatCSS("justify-content", getJustify(val))];
    }

    if (key === "align") {
      return [...acc, formatCSS("align-items", val)];
    }

    if (key === "spacing") {
      return [...acc, normalizeSpacing(val, theme)];
    }

    if (val) {
      return [...acc, formatCSS(key, val)];
    }

    return acc;
  }, []);
};
