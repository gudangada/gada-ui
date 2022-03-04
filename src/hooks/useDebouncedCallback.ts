/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import { debounce } from "lodash";

export type FunctionToDebounce = (...args: any) => any;

export const useDebouncedCallback = (
  fnToDebounce: FunctionToDebounce,
  durationInMs = 200,
  deps?: any[] | null
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return React.useCallback(
    debounce(fnToDebounce, durationInMs),
    deps ? [fnToDebounce, durationInMs, ...deps] : [fnToDebounce, durationInMs]
  );
};

export default useDebouncedCallback;
