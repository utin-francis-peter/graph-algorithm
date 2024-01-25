import { useState } from "react";
import { MIN_COLS, MIN_ROWS } from "../../constants";
import { TGameForm } from "../../types/types";

const GameForm: React.FC<TGameForm> = ({ handleGameInputs, setGameIsOn }) => {
  const [errorMssg, setErrorMssg] = useState("");

  const validateAndSetPositions = (
    values: string,
    action: "setBotPosition" | "setCookiePosition"
  ) => {
    const pattern = /^\d+,\d+$/;
    if (pattern.test(values)) {
      // ensure the values are greater than zero before setting botPosition
      setErrorMssg("");
      const [x, y] = values.split(",").map((value) => +value);
      handleGameInputs({
        action,
        payload: {
          x,
          y,
        },
      });
    } else {
      setErrorMssg("Bot position has to be in x,y format");
    }
  };

  return (
    <div className="h-screen border border-red-400 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGameIsOn(true);
        }}>
        <div className="mb-2">
          <label htmlFor="rows">Number of rows:</label>
          <input
            onChange={(e) =>
              handleGameInputs({ action: "setRows", payload: +e.target.value })
            }
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="number"
            id="rows"
            min={MIN_ROWS}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="cols">Number of columns:</label>
          <input
            onChange={(e) =>
              handleGameInputs({ action: "setCols", payload: +e.target.value })
            }
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="number"
            id="cols"
            min={MIN_COLS}
            required
          />
        </div>

        <div className="mb-2">
          <label htmlFor="robot-position">Robot position (x,y):</label>
          <input
            onChange={(e) =>
              validateAndSetPositions(e.target.value, "setBotPosition")
            }
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="text"
            id="robot-position"
            required
          />
        </div>

        <div>
          <label htmlFor="cookie-position">Cookie position (x,y):</label>
          <input
            onChange={(e) =>
              validateAndSetPositions(e.target.value, "setCookiePosition")
            }
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="text"
            id="cookie-position"
            required
          />
        </div>

        <h5 className="text-red-500 text-base">{errorMssg}</h5>

        <button className="bg-blue-500 text-white p-2 rounded-lg">
          Generate
        </button>
      </form>
    </div>
  );
};

export default GameForm;
