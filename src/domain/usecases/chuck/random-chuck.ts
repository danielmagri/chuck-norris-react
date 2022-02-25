import { Chuck } from "../../models";

export interface RandomChuck {
  random(): Promise<RandomChuck.Response>;
}

export namespace RandomChuck {
  export type Params = { id: number };
  export type Response = Chuck.Model;
}
