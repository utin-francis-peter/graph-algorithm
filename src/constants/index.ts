import { TAppState } from "../types/types";

export const INITIAL_APP_STATE: TAppState = {
  dimension: {
    rows: 0,
    cols: 0,
  },
  botPosition: {
    x: 0,
    y: 0,
  },
  cookiePosition: {
    x: 0,
    y: 0,
  },
  steps: [],
};

export const MIN_ROWS = 5;
export const MIN_COLS = 5;
