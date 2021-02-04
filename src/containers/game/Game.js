import React, { Component } from "react";

import ScoreBar from "../../comonents/scoreBar/ScoreBar";
import Option from "../../comonents/gameOption/Option";
import { Data } from "../../data/data";
import { choice } from "../../utils/utils";
import { gameResault } from "../../utils/utils";
import Button from "../../comonents/button/Button";

import "./Game.scss";

const initialState = {
  userSelect: null,
  randomSelect: null,
  isTimer: false,
  winnerText: "",
  timer: 3,
};

class Game extends Component {
  state = {
    ...initialState,
    carrentScore: 0,
  };

  restart = () => {
    this.setState({
      ...initialState,
      carrentScore: this.state.carrentScore,
    });
  };

  randomChoice = () => {
    const randomId = Math.floor(Math.random() * 3);
    const randomChoice = Object.keys(choice)[randomId];
    return randomChoice;
  };

  play = (select) => {
    this.setState({
      userSelect: select,
      isTimer: true,
    });
    const randomChoice = this.randomChoice();
    const winnerText = gameResault(select, randomChoice);

    this.setState({
      randomSelect: randomChoice,
      winnerText,
    });
  };

  componentDidUpdate() {
    if (this.state.timer === 3 && this.state.userSelect) {
      this.intervalId = setInterval(() => {
        if (this.state.timer === 1) {
          let score = this.state.carrentScore;
          if (this.state.winnerText === "You Win") {
            score += 1;
          } else if (this.state.winnerText === "You Loose") {
            score -= 1;
          }
          clearInterval(this.intervalId);
          this.setState({
            isTimer: false,
            carrentScore: score,
          });
        }
        this.setState({
          timer: this.state.timer - 1,
        });
      }, 400);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app-game-container">
        <ScoreBar score={this.state.carrentScore} />
        {!this.state.userSelect ? (
          <div className="app-game-container__block-start">
            <Option
              Icon={Data[choice.paper].icon}
              color={Data[choice.paper].color}
              onClick={() => {
                this.play(choice.paper);
              }}
            />
            <Option
              Icon={Data[choice.scissers].icon}
              color={Data[choice.scissers].color}
              onClick={() => {
                this.play(choice.scissers);
              }}
            />
            <Option
              Icon={Data[choice.rock].icon}
              color={Data[choice.rock].color}
              onClick={() => {
                this.play(choice.rock);
              }}
            />
          </div>
        ) : (
          <div className="app-game-container__block-start">
            <Option
              Icon={Data[this.state.userSelect].icon}
              color={Data[this.state.userSelect].color}
            />
            {this.state.isTimer ? (
              <div className="app-game-container__block-start__timer">
                {this.state.timer}
              </div>
            ) : (
              <div className="app-game-container__block-start">
                <div className="app-game-container__block-start__block-restart">
                  <Button
                    className="app-game-container__block-start__block-restart__btn"
                    title="Restart"
                    onClick={this.restart}
                  />
                  <span>{this.state.winnerText}</span>
                </div>
                <Option
                  Icon={Data[this.state.randomSelect].icon}
                  color={Data[this.state.randomSelect].color}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Game;
