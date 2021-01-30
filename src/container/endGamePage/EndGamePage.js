import React from "react";

import Button from "../../components/button/Button";

const EndGamePage = ({ className1, className2, title1, title2 }) => (
  <>
    <Button className={className1} title={title1} />
    <Button className={className2} title={title2} />
  </>
);

export default EndGamePage;
