export const choice = {
  paper: "paper",
  scissers: "scissers",
  rock: "rock",
};

export const gameResault = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Draw";
  }
  switch (playerChoice) {
    case choice.paper:
      if (computerChoice === choice.rock) {
        return "You Win";
      } else {
        return "You Loose";
      }
    case choice.scissers:
      if (computerChoice === choice.paper) {
        return "You Win";
      } else {
        return "You Loose";
      }
    case choice.rock:
      if (computerChoice === choice.scissers) {
        return "You Win";
      } else {
        return "You Loose";
      }

    default:
      throw new Error("Wrong Choices ...");
  }
};
