import * as t from "io-ts";
import { Option } from "fp-ts/lib/Option";
import { makeSharedOption } from "@shared/lib/options";

export const v1: Option<Date> = makeSharedOption(false);
export const v2 = t.type({ a: t.number });
