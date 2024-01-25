import React from "react";
import { TDimension, TGameInterface, TPosition } from "../../../types/types";

type TGameTable = {
  dimension: TDimension;
  botPosition: TPosition;
  cookiePosition: TPosition;
};

const GameTable: React.FC<TGameTable> = ({
  dimension,
  botPosition,
  cookiePosition,
}) => {
  const { rows, cols } = dimension;
  return (
    <table className="w-full h-full">
      <tbody className="border-2 border-green-400">
        {Array(rows)
          .fill(0)
          .map((_, i) => {
            return (
              <tr className="border-2 border-black" key={i}>
                {/* at each row iteration, create an array columns-length and map over to return a td which forms a column */}
                {Array(cols)
                  .fill(0)
                  .map((_, j) => {
                    return (
                      <td
                        key={j}
                        className={`w-[${100 / rows}%] h-[${
                          100 / cols
                        }%] border-2 border-black text-center`}>
                        {botPosition.x === i && botPosition.y === j
                          ? "🤖"
                          : cookiePosition.x === i && cookiePosition.y === j
                          ? "🍪"
                          : ""}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default GameTable;
