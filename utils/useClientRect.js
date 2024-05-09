import { useCallback, useState } from "react";

export const UseClientRect = () => {
  const [rect, setRect] = useState(null);

  const ref = useCallback((node) => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
};
