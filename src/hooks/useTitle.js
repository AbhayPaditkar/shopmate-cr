import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} |  Stoping Cart`;
  }, [title]);
  return null;
};
