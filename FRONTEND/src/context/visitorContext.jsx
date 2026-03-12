import { createContext, useState } from "react";

export const visitorContext = createContext();

export function VisitorProvider({ children }) {
  const [visitors, setVisitors] = useState([]);

  return (
    <visitorContext.Provider value={{ visitors, setVisitors }}>
      {children}
    </visitorContext.Provider>
  );
}