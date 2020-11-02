// @noflow
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Stack, Button } from "@kiwicom/orbit-components";

const MyApp = () => {
  return (
    <Stack spacing="extraTight">
      <Stack
        spacing="tight"
        mediumMobile={{ spacing: "condensed" }}
        largeMobile={{ spacing: "compact" }}
        tablet={{ spacing: "natural" }}
        desktop={{ spacing: "comfy" }}
        largeDesktop={{ spacing: "loose" }}
      >
        <Button type="primary">Hello World</Button>
        <Button type="secondary">Hello World</Button>
      </Stack>
      <Stack
        spacing="loose"
        mediumMobile={{ spacing: "extraLoose" }}
        largeMobile={{ spacing: "loose" }}
        tablet={{ spacing: "condensed" }}
        desktop={{ spacing: "extraTight" }}
        largeDesktop={{ spacing: "none" }}
      >
        <Button type="primary">Hello World</Button>
        <Button type="secondary">Hello World</Button>
      </Stack>
    </Stack>
  );
};

export default MyApp;
