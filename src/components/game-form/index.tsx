import { MIN_COLS, MIN_ROWS } from "../../constants";

const GameForm = () => {
  return (
    <div className="h-screen border border-red-400 flex items-center justify-center">
      <form>
        <div className="mb-2">
          <label htmlFor="rows">Number of rows:</label>
          <input
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="number"
            id="rows"
            min={MIN_ROWS}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="cols">Number of columns:</label>
          <input
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="number"
            id="cols"
            min={MIN_COLS}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="robot-position">Robot position (x,y):</label>
          <input
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="text"
            id="robot-position"
          />
        </div>

        <div>
          <label htmlFor="cookie-position">Cookie position (x,y):</label>
          <input
            className="border border-gray-500 rounded-lg p-1 ml-2"
            type="text"
            id="cookie-position"
          />
        </div>
      </form>
    </div>
  );
};

export default GameForm;
