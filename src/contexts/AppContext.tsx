import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import * as React from "react";

export const AppContext = createContext({});

type Props = {
  children?: React.ReactNode;
};

const AppContextProvider = ({ children }: Props) => {
  const location = useLocation();
  const currentPage = location.pathname;

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        searchOpen,
        setSearchOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
