import { useContext, useState, createContext, useEffect } from "react";
import { readObjectFromCache } from "./utiils/caching";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const readUser = async () => {
    const res = await readObjectFromCache("user");
    setUser(res);
  };

  useEffect(() => {
    readUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
