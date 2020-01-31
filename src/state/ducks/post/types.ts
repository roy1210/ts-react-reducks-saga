export interface IPostState {
  readonly step: number;
  readonly error: Error | null;
}
export const GO_NEXT_STEP = "@@post/GO_NEXT_STEP";
export const GO_BACK_STEP = "@@post/GO_BACK_STEP";
