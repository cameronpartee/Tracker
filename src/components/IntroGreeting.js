import React from "react";

const IntroGreeting = () => {
  const hour = new Date().getHours();
  const timeOfDay =
    (hour < 12 && "morning") || (hour < 17 && "afternoon") || "evening";

  return (
    <div
      style={{
        width: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Lets add a positive word api here lol */}
      <h1>{`Good ${timeOfDay} Cameron`}</h1>
      <div>How many interview questions have you completed today?</div>
    </div>
  );
};

export default IntroGreeting;
