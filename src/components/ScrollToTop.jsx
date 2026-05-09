import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the browser to the top of the page on every route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}