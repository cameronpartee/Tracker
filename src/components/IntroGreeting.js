import React from "react";
import { adjectives } from "../helpers/constants";

const IntroGreeting = () => {
  const hour = new Date().getHours();
  const index = React.useMemo(
    () => Math.floor(Math.random() * (adjectives.length - 1 - 0) + 0),
    [hour]
  );
  const adj = React.useMemo(() => adjectives[index], [hour]);
  const timeOfDay = React.useMemo(
    () => (hour < 12 && "morning") || (hour < 17 && "afternoon") || "evening",
    [hour]
  );

  return <h2>{`Good ${timeOfDay} ${adj.toLocaleUpperCase()} Cameron`}</h2>;
};

export default IntroGreeting;
