import ScrollContext from "./ScrollContext";
import { useState } from "react";

function ScrollContextWrapper({ children }) {
  const [isScrolling, setIsScrolling] = useState(true);

  return (
    <ScrollContext.Provider value={{ isScrolling, setIsScrolling }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollContextWrapper;
