import React, { Component } from "react";

import Button from "../../components/button/Button";
import Paper from "../../assets/icons/paper-icon";
import Rock from "../../assets/icons/rock-icon";
import Scissors from "../../assets/icons/scissors-icon";
import StartGamePage from "../../container/startGamePage/StartGamePage";
import EndGamePage from "../../container/endGamePage/EndGamePage";

import "./Game.scss";

const instate = {
  timer: 5,
  gameОptions: true,
  autoVariant: Math.ceil(Math.random() * 3),
  p1: false,
  usPaper: false,
  usRock: false,
  usScissors: false,
};

class Game extends Component {
  state = {
    score: 0,
    ...instate,
  };

  restartHandler = () => {
    if (
      (this.state.usPaper && this.state.autoVariant === 3) ||
      (this.state.usRock && this.state.autoVariant === 1) ||
      (this.state.usScissors && this.state.autoVariant === 2)
    ) {
      this.setState({
        score: this.state.score - 1,
        ...instate,
      });
    }

    if (
      (this.state.usScissors && this.state.autoVariant === 1) ||
      (this.state.usPaper && this.state.autoVariant === 2) ||
      (this.state.usRock && this.state.autoVariant === 3)
    ) {
      this.setState({
        score: this.state.score + 1,
        ...instate,
      });
    }

    if (
      (this.state.usPaper && this.state.autoVariant === 1) ||
      (this.state.usRock && this.state.autoVariant === 2) ||
      (this.state.usScissors && this.state.autoVariant === 3)
    ) {
      this.setState({
        score: this.state.score,
        ...instate,
      });
    }
  };

  PaperGame = () => {
    this.setState({
      gameОptions: false,
    });
    const intervalID = setInterval(() => {
      if (this.state.timer === 1) {
        this.setState({
          p1: true,
          autoVariant: Math.ceil(Math.random() * 3),
        });
        clearInterval(intervalID);
      }
      this.setState({
        timer: this.state.timer - 1,
      });
    }, 200);
    this.setState({ usPaper: true });
  };

  RockGame = () => {
    this.setState({
      gameОptions: false,
    });
    const intervalID = setInterval(() => {
      if (this.state.timer === 1) {
        this.setState({
          p1: true,
          autoVariant: Math.ceil(Math.random() * 3),
        });
        clearInterval(intervalID);
      }
      this.setState({
        timer: this.state.timer - 1,
      });
    }, 200);
    this.setState({ usRock: true });
  };

  ScissorsGame = () => {
    this.setState({
      gameОptions: false,
    });
    const intervalID = setInterval(() => {
      if (this.state.timer === 1) {
        this.setState({
          p1: true,
          autoVariant: Math.ceil(Math.random() * 3),
        });
        clearInterval(intervalID);
      }
      this.setState({
        timer: this.state.timer - 1,
      });
    }, 200);
    this.setState({ usScissors: true });
  };

  render() {
    let userChoice = () => {
      if (this.state.usPaper) {
        return <Paper />;
      } else if (this.state.usRock) {
        return <Rock />;
      } else if (this.state.usScissors) {
        return <Scissors />;
      }
    };
    let randomChoince = () => {
      if (this.state.p1 && this.state.autoVariant === 1) {
        return <Paper />;
      } else if (this.state.p1 && this.state.autoVariant === 2) {
        return <Rock />;
      } else if (this.state.p1 && this.state.autoVariant === 3) {
        return <Scissors />;
      } else {
        return this.state.timer;
      }
    };
    return (
      <div className="app-game-container">
        <div className="app-game-container__block-score">
          <div className="app-game-container__block-score__game-name">
            <p>Rock</p>
            <p>Paper</p>
            <p>Scissors</p>
          </div>
          <div>
            <Button
              className="app-btn-restart"
              onClick={this.restartHandler}
              title="New"
            />
          </div>
          <div className="app-game-container__block-score__item">
            <p>score</p>
            <p>{this.state.score}</p>
          </div>
        </div>
        <div className="block-game">
          {this.state.gameОptions ? (
            <StartGamePage
              onClick1={this.PaperGame}
              className1="block-game__paper"
              title1={<Paper />}
              onClick2={this.RockGame}
              className2="block-game__Rock"
              title2={<Rock />}
              onClick3={this.ScissorsGame}
              className3="block-game__Scissors"
              title3={<Scissors />}
            />
          ) : (
            <EndGamePage
              className1="block-game__paper"
              className2="block-game__Rock"
              title1={userChoice()}
              title2={randomChoince()}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Game;
