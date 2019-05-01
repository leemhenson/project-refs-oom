import { option } from "fp-ts/lib/Option";
import { makeSharedOption } from "@shared/lib/options";

// Does
export const v1 = option.map(makeSharedOption(false), d => d.valueOf() + 2);
