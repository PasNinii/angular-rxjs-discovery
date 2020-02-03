export interface ResultApi {
  name: string;
  url: string;
}

export interface Info {
  count: number;
  next: string;
  previous?: string;
  results: ResultApi[];
}
