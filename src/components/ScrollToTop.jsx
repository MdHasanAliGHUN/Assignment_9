import { useEffect } from "react";
import { useLocation } from "react-router";
const ScrollToTop = ({ smooth = true }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto", 
    });
  }, [pathname, smooth]);

  return null; 
};

export default ScrollToTop;
