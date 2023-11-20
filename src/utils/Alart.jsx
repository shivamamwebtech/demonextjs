const { createContext } = require("react");

export const AlartContext = createContext("");

export const Alart = ({ children }) => {
  return <AlartContext.Provider >{children}</AlartContext.Provider>;
};
