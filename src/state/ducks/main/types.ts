export interface IMainState {
  readonly step: number;
  readonly error: Error | null;
}
export const GO_NEXT_STEP = "@@main/GO_NEXT_STEP";
export const GO_BACK_STEP = "@@main/GO_BACK_STEP";
