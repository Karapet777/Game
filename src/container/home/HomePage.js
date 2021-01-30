import React from "react";

import Button from "../../components/button/Button";
import "./HomePage.scss";

const StartPage = ({ onClick, className }) => {
  return (
    <div className="app-Start-Page">
      <h1 className="app-Start-Page__text">ROCK PAPER SCISSORS</h1>
      <Button onClick={onClick} className={className} title="Start" />
    </div>
  );
};

export default StartPage;
