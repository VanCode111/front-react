/* eslint-disable */
import { useCallback, useState } from "react";

const useSwitcher = (initial, cb) => {
  const [state, setState] = useState(initial);
  const switchState = useCallback((index) => {
    setState((prev) => cb(prev, index));
  }, []);
  return [state, switchState];
};

export default useSwitcher;
