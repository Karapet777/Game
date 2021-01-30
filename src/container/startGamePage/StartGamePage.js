import React from "react";

import Button from "../../components/button/Button";

const StartGamePage = ({
  onClick1,
  className1,
  title1,
  onClick2,
  className2,
  title2,
  onClick3,
  className3,
  title3,
}) => {
  return (
    <>
      <Button onClick={onClick1} className={className1} title={title1} />
      <Button onClick={onClick2} className={className2} title={title2} />
      <Button onClick={onClick3} className={className3} title={title3} />
    </>
  );
};

export default StartGamePage;
