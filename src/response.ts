export interface RawResponse {
  //todo(pear): we create this so we don't need to validate
  headers: Record<string, unknown>;
  //todo(pear): handle streams somehow
  body: string;
}

export interface ParsedResponse {
  headers: Record<string, unknown>;
  //todo(pear): handle streams somehow
  body: Record<string, unknown>;
}
