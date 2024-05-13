import "./App.scss";
import Box from "./components/Box";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "./src/assets/rock.png",
  },
  scissors: {
    name: "Scissors",
    img: "./src/assets/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "./src/assets/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(""); // 승패 결정

  /** 버튼 클릭 함수 */
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice)); // 판단하는 함수(유저 선택 값, 컴퓨터 선택 값)
  };

  const judgement = (user, computer) => {
    // user === computer ---> tie(무승부)
    // user === "rock", computer === "scissors" ---> user 승
    // user === "rock", computer === "paper"  ---> user 패
    // user === "scissors", computer === "paper"  ---> user 승
    // user === "scissors", computer === "rock"  ---> user 패
    // user === "paper", computer === "rock"  ---> user 승
    // user === "paper", computer === "scissors"  ---> user 패

    if (user.name === computer.name) return "Tie";
    else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  /** 컴퓨터 랜덤 함수 */
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div className="App">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}></button>
        <button onClick={() => play("rock")}></button>
        <button onClick={() => play("paper")}></button>
      </div>
    </div>
  );
}

export default App;
