import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${ title }  / Shopcart`
    }, [title]);
  return null;
}