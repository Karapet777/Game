import React, { useState } from "react";

import Layout from "./components/layout/Layout";
import HomePage from "./container/home/HomePage";
import Game from "./container/game/Game";

import "./App.scss";

function App() {
  const [View, setView] = useState(true);
  const handlerViewPage = () => setView(false);

  return (
    <div className="App">
      <Layout>
        {View ? (
          <HomePage
            onClick={handlerViewPage}
            className="app-Start-Page__btn-start"
          />
        ) : (
          <Game />
        )}
      </Layout>
    </div>
  );
}

export default App;
