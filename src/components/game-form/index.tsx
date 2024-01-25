import { useState } from "react";
import { MIN_COLS, MIN_ROWS } from "../../constants";
import { TGameForm } from "../../types/types";

const GameForm: React.FC<TGameForm> = ({
  gameInputs,
  handleGameInputs,
  setGameIsOn,
}) => {
  const [errorMssg, setErrorMssg] = useState("");

  const validateAndSetPositions = (
    values: string,
    action: "setBotPosition" | "setCookiePosition"
  ) => {
    const pattern = /^\d+,\d+$/;
    if (pattern.test(values)) {
      // ensure the values are greater than zero before setting botPosition
      const [x, y] = values.split(",").map((value) => +value);

      // checking that bot and cookie position is within the range of table rows and columns
      if (
        (action === "setBotPosition" && gameInputs.tableDimension.rows < x) ||
        (action === "setBotPosition" && gameInputs.tableDimension.cols < y) ||
        (action === "setCookiePosition" &&
          gameInputs.tableDimension.rows < x) ||
        (action === "setCookiePosition" && gameInputs.tableDimension.cols < y)
      ) {
        // TODO: the error message should clearly indicate if cookie or bot position is above table dimension
        setErrorMssg("Entered position is above table dimension");
      } else {
        setErrorMssg("");

        handleGameInputs({
          action,
          payload: {
            x,
            y,
          },
        });
      }
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

        <button
          disabled={Boolean(errorMssg.trim())}
          className="bg-blue-500 text-white p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">
          Generate
        </button>
      </form>
    </div>
  );
};

export default GameForm;
