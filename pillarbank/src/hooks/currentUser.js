import { useEffect, useContext, createContext, useState } from "react";
import {
  readLocalStorage,
  writeLocalStorage,
} from "../utils/storage/localStorage";



const CurrentUserContext = createContext({
  login: (username) => {},
  logout: () => {},
  currentUser: readLocalStorage<{ username }>("user")?.username,
});

export function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState<string | undefined>(
    readLocalStorage<{ username: string }>("user")?.username
  );

  const updateCurrentUser = () => {
    const user = readLocalStorage<{ username: string }>("user");
    if (user) {
      setCurrentUser(user.username);
    } else {
      setCurrentUser(undefined);
    }
  };

  useEffect(() => {
    updateCurrentUser();
  }, []);

  const login = async (username) => {
    writeLocalStorage("user", {
      username,
    });
    setCurrentUser(username);
  };

  const logout = () => {
    writeLocalStorage("user", null);
    setCurrentUser(undefined);
  };

  const isAdmin = currentUser === "admin";

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, login, logout, isAdmin }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
}

export const useCurrentUser = () => useContext(CurrentUserContext);