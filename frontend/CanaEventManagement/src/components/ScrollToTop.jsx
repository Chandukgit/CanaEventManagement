// 1. Imports
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 2. Dynamic Variables
const scrollConfig = {
  top: 0,
  left: 0,
  behavior: "smooth"
};

// 3. Component
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(scrollConfig);
  }, [pathname]);

  return null;
}