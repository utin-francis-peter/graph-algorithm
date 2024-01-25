export type TDimension = {
  rows: number;
  cols: number;
};

export type TPosition = {
  x: number;
  y: number;
};

export type TStep = "Move Up" | "Move Down" | "Move Left" | "Move Right";

export type TAppState = {
  dimension: TDimension;
  botPosition: TPosition;
  cookiePosition: TPosition;
  steps: TStep[];
};

/*
worth noting:
- stepCounts is determined by rows, cols, and position of bot and cookie
*/
export type THandleGameInputs =
  | {
      action: "setRows" | "setCols" | "setStepCount";
      payload: number;
    }
  | {
      action: "setBotPosition" | "setCookiePosition";
      payload: TPosition;
    }
  | {
      action: "addStep";
      payload: TStep;
    }
  | {
      action: "clearStep";
      payload: undefined;
    };
