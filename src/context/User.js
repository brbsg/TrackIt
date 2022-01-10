import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    id: 1359,
    name: "Gustavo",
    image:
      "https://i.picsum.photos/id/38/200/300.jpg?hmac=-3xmMd1qccZR3fLPMvwj8D3GgMIIDCKTpXJspTKuZW0",
    email: "gustavob@gmail.com",
    password: "1234",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM1OSwiaWF0IjoxNjQxNzYwMjEyfQ.EJl8AtHnlT1R_HjD0tbIUzhiqB2QHIx1RKAq9GxV6eE",
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
