export interface IRestState {
  readonly restStep: number;
  readonly fees: IFetchFees | [];
  readonly isLoading: boolean;
  readonly posts: IFetchArticles | [];
  readonly error: Error | null;
}

export interface IFetchFee {
  bridgeFeePercent: string;
  currency: string;
  minerFee: string;
}
export interface IFetchFees extends Array<IFetchFee> {}

export interface IArticle {
  id: number;
  title: string;
}
export interface IFetchArticles extends Array<IArticle> {}

export const GO_NEXT_STEP = "@@rest/GO_NEXT_STEP";
export const FETCH_ARTICLES_REQUEST = "@@rest/FETCH_ARTICLES_REQUEST";
export const FETCH_ARTICLES_SUCCESS = "@@rest/FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "@@rest/FETCH_ARTICLES_FAILURE";
