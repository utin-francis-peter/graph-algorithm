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
