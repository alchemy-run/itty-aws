export interface ErrorResponse {
  _tag: string;
  //todo(pear): handle streams somehow
  data: Record<string, unknown>;
}
