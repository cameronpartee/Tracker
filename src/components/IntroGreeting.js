import React from "react";
import { adjectives } from "../data/data";

const IntroGreeting = () => {
  const hour = new Date().getHours();
  const index = Math.floor(Math.random() * (adjectives.length - 1 - 0) + 0);
  const adj = adjectives[index];
  const timeOfDay =
    (hour < 12 && "morning") || (hour < 17 && "afternoon") || "evening";

  return <h2>{`Good ${timeOfDay} ${adj.toLocaleUpperCase()} Cameron`}</h2>;
};

export default IntroGreeting;
