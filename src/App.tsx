import { useState } from "react";
import { TAppState, THandleGameInputs } from "./types/types";
import { INITIAL_APP_STATE } from "./constants";
import GameForm from "./components/game-form";

const App = () => {
  const [gameInputs, setGameInputs] = useState<TAppState>(INITIAL_APP_STATE);

  // function responsible for updating gameInputs data
  const handleGameInputs = ({ action, payload }: THandleGameInputs) => {
    switch (action) {
      case "setRows":
        setGameInputs((prev) => ({
          ...prev,
          dimension: {
            ...prev.dimension,
            rows: payload,
          },
        }));
        break;

      case "setCols":
        setGameInputs((prev) => ({
          ...prev,
          dimension: {
            ...prev.dimension,
            cols: payload,
          },
        }));
        break;

      case "setBotPosition":
        setGameInputs((prev) => ({
          ...prev,
          botPosition: {
            ...prev.botPosition,
            x: payload.x,
            y: payload.y,
          },
        }));
        break;

      case "setCookiePosition":
        setGameInputs((prev) => ({
          ...prev,
          cookiePosition: {
            ...prev.cookiePosition,
            x: payload.x,
            y: payload.y,
          },
        }));
        break;

      case "addStep":
        setGameInputs((prev) => ({
          ...prev,
          steps: [...prev.steps, payload],
        }));
        break;

      case "clearStep":
        setGameInputs((prev) => ({
          ...prev,
          steps: [],
        }));
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <GameForm />
    </div>
  );
};

export default App;
