import { TAppState, TGameInterface } from "../../types/types";
import GameTable from "./game-table";

const GameInterface: React.FC<TGameInterface> = ({ gameInputs }) => {
  return (
    <div className="border border-green-300 w-[80%] h-[80%] flex items-center justify-center gap-10">
      <section className="h-full w-1/2 border border-red-600">
        {/* table component */}
        <GameTable
          dimension={gameInputs.tableDimension}
          botPosition={gameInputs.botPosition}
          cookiePosition={gameInputs.cookiePosition}
        />
      </section>
      <section className="h-full w-1/2 border-2 border-blue-600 flex flex-col gap-10 p-5">
        <header className="flex-1">
          <h1 className="font-bold">Your selected steps</h1>
          {/* steps component */}
        </header>
        <button className="border-2 border-blue-900 bg-gray-200 text-blue-900 p-3 rounded-md hover:bg-blue-900 hover:text-white">
          Run Program
        </button>
      </section>
    </div>
  );
};

export default GameInterface;
