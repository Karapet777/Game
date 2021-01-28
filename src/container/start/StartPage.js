import React from "react";

import "./StartPage.scss";

const StartPage = ({ children }) => {
  return (
    <div className="app-Start-Page">
      <h1 className="app-Start-Page__text">ROCK PAPER SCISSORS</h1>
      {children}
    </div>
  );
};

export default StartPage;
