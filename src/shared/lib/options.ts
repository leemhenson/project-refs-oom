import { Option, some, none } from "fp-ts/lib/Option";

export const makeSharedOption = (x: boolean): Option<Date> =>
  x ? some(new Date()) : none;
