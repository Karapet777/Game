import React, { Component } from "react";

import Button from "../../components/button/Button";
import Paper from "../../assets/icons/paper-icon";
import Rock from "../../assets/icons/rock-icon";
import Scissors from "../../assets/icons/scissors-icon";

import "./Game.scss";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      timer: 3,
      gameОptions: true,
      autoVariant: Math.ceil(Math.random() * 3),
      p1: false,
      p2: false,
      p3: false,

      my1: false,
      my2: false,
      my3: false,
    };
  }

  restartHandler = () => {
    if (this.state.my1 === true && this.state.autoVariant === 3) {
      this.setState({
        score: this.state.score - 1,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my2 && this.state.autoVariant === 1) {
      this.setState({
        score: this.state.score - 1,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my3 && this.state.autoVariant === 2) {
      this.setState({
        score: this.state.score - 1,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my3 === true && this.state.autoVariant === 1) {
      this.setState({
        score: this.state.score + 1,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my1 && this.state.autoVariant === 2) {
      this.setState({
        score: this.state.score + 1,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my2 && this.state.autoVariant === 3) {
      this.setState({
        score: this.state.score + 1,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my1 && this.state.autoVariant === 1) {
      this.setState({
        score: this.state.score,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my2 && this.state.autoVariant === 2) {
      this.setState({
        score: this.state.score,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
      });
    }
    if (this.state.my3 && this.state.autoVariant === 3) {
      this.setState({
        score: this.state.score,
        timer: 3,
        gameОptions: true,
        autoVariant: Math.ceil(Math.random() * 3),
        p1: false,
        p2: false,
        p3: false,
        my1: false,
        my2: false,
        my3: false,
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
          p2: true,
          p3: true,
          my1: true,
          my2: false,
          my3: false,
        });
        clearInterval(intervalID);
      }
      this.setState({
        timer: this.state.timer - 1,
      });
    }, 400);
  };

  RockGame = () => {
    this.setState({
      gameОptions: false,
    });
    const intervalID = setInterval(() => {
      if (this.state.timer === 1) {
        this.setState({
          p1: true,
          p2: true,
          p3: true,
          my1: false,
          my2: true,
          my3: false,
        });
        clearInterval(intervalID);
      }
      this.setState({
        timer: this.state.timer - 1,
      });
    }, 400);
  };

  ScissorsGame = () => {
    this.setState({
      gameОptions: false,
    });
    const intervalID = setInterval(() => {
      if (this.state.timer === 1) {
        this.setState({
          p1: true,
          p2: true,
          p3: true,
          my1: false,
          my2: false,
          my3: true,
        });
        clearInterval(intervalID);
      }
      this.setState({
        timer: this.state.timer - 1,
      });
    }, 400);
  };

  render() {
    let a = () => {
      if (this.state.p1 && this.state.autoVariant === 1) {
        return <Paper />;
      } else if (this.state.p2 && this.state.autoVariant === 2) {
        return <Rock />;
      } else if (this.state.p3 && this.state.autoVariant === 3) {
        return <Scissors />;
      } else {
        return this.state.timer;
      }
    };
    let b = () => {
      if (this.state.my1) {
        return <Paper />;
      } else if (this.state.my2) {
        return <Rock />;
      } else if (this.state.my3) {
        return <Scissors />;
      }
    };
    const startGame = (
      <>
        <Button
          onClick={this.PaperGame}
          className="block-game__paper"
          title={<Paper />}
        />
        <Button
          onClick={this.RockGame}
          className="block-game__Rock"
          title={<Rock />}
        />
        <Button
          onClick={this.ScissorsGame}
          className="block-game__Scissors"
          title={<Scissors />}
        />
      </>
    );
    const endGame = (
      <>
        <Button className="block-game__paper" title={b()} />
        <Button className="block-game__Rock" title={a()} />
      </>
    );

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
              title="Restart"
            />
          </div>
          <div className="app-game-container__block-score__item">
            <p>score</p>
            <p>{this.state.score}</p>
          </div>
        </div>
        <div className="block-game">
          {this.state.gameОptions ? startGame : endGame}
        </div>
      </div>
    );
  }
}
export default Game;
