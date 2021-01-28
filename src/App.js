import React, { useState } from "react";

import Button from "./components/button/Button";
import Layout from "./components/layout/Layout";
import StartPage from "./container/start/StartPage";
import Game from "./container/game/Game";

import "./App.scss";

function App() {
  const [View, setView] = useState(true);

  const handlerViewPage = () => setView(false);

  return (
    <div className="App">
      <Layout>
        {View ? (
          <StartPage>
            <Button
              onClick={handlerViewPage}
              className="app-Start-Page__btn-start"
              title="Start"
            />
          </StartPage>
        ) : (
          <Game />
        )}
      </Layout>
    </div>
  );
}

export default App;
