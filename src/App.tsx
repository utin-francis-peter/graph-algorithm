import { useState } from "react";
import { TAppState } from "./types/types";
import { INITIAL_APP_STATE } from "./constants";
import GameForm from "./components/game-form";

const App = () => {
  const [gameInputs, setGameInputs] = useState<TAppState>(INITIAL_APP_STATE);

  console.log(gameInputs);

  return (
    <div>
      <GameForm />
    </div>
  );
};

export default App;
