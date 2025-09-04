type TSuccessResponse<T> = {
  result: T;
  ok: true;
  error?: never;
};

type TErrorResponse = {
  error: string;
  ok: false;
  result?: never;
};

export type TTelegraphResponse<T> = TSuccessResponse<T> | TErrorResponse;
