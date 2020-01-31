export interface ISwapState {
  readonly step: number;
  readonly error: Error | null;
}
export const GO_NEXT_STEP = "@@swap/GO_NEXT_STEP";
export const GO_BACK_STEP = "@@swap/GO_BACK_STEP";
