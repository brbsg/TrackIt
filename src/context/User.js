import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 1359,
    name: "",
    image: "",
    email: "",
    password: "",
    token: "",
  });
  const [update, setUpdate] = useState(false);
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider
      value={{ user, setUser, update, setUpdate, progress, setProgress }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user, setUser, update, setUpdate, progress, setProgress } =
    useContext(UserContext);
  return { user, setUser, update, setUpdate, progress, setProgress };
}
