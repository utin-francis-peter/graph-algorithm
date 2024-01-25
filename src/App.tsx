import { useState } from "react";
import { TAppState } from "./types/types";
import { INITIAL_APP_STATE } from "./constants";

const App = () => {
  const [gameInputs, setGameInputs] = useState<TAppState>(INITIAL_APP_STATE);

  console.log(gameInputs);

  return <div>App</div>;
};

export default App;
