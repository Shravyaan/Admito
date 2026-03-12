import { createContext, useState } from "react";

export const VisitorContext = createContext();

export function VisitorProvider({ children }) {
  const [visitors, setVisitors] = useState([]);

  return (
    <VisitorContext.Provider value={{ visitors, setVisitors }}>
      {children}
    </VisitorContext.Provider>
  );
}