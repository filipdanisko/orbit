// @flow
import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import Airplane from "../icons/AirplaneUp";
import Stack from "../Stack";
import CarrierLogo from "../CarrierLogo";
import Badge from "../Badge";
import ItineraryPart, {
  ItineraryPartDetails,
  ItineraryPartPlace,
} from "./components/ItineraryPart";

import Itinerary from ".";

const BadgeGroup = () => {
  const carrier = [{ code: "FR", name: "Ryanair" }];

  return (
    <Stack inline align="center" spacing="tight">
      <CarrierLogo size="medium" carriers={carrier} />
      <Badge icon={<Airplane />} />
      <Badge>1 stop</Badge>
    </Stack>
  );
};

export const Default = () => {
  return (
    <Itinerary>
      <ItineraryPart>
        <ItineraryPartPlace
          name="Prague"
          designation="Václav Havel Airport Prague (PRG)"
          date="Fri, 19.10"
          time="14:05"
        />
        <ItineraryPartDetails duration="2h 30m" summary={<BadgeGroup />}>
          <div style={{ height: "200px" }}>kekekekek</div>
        </ItineraryPartDetails>
        <ItineraryPartPlace
          name="Milan"
          designation="Milan Bergamo International Airport (BGY)"
          date="Fri, 19.10"
          time="16:35"
        />
      </ItineraryPart>
    </Itinerary>
  );
};

export const Status = () => {
  const label = text("label", "Canceled");
  const type = select("type", ["critical", "warning", "success"], "critical");

  return (
    <ItineraryPart status={type} label={label}>
      <ItineraryPartPlace
        name="Prague"
        designation="Václav Havel Airport Prague (PRG)"
        date="Fr, 19.10"
        time="14:05"
      />
    </ItineraryPart>
  );
};

export const Place = () => {
  const date = text("date", "Fr, 19.10");
  const time = text("time", "14:05");
  const designation = text("designation", "Václav Havel Airport Prague (PRG)");
  const name = text("name", "Prague");

  return <ItineraryPartPlace name={name} designation={designation} date={date} time={time} />;
};

export default {
  title: "Itinerary",
  component: Itinerary,
  includeStories: ["Default", "Status", "Place"],
};
