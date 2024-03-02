import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState([]);
  const [data,setData] = useState(null)
  const [isOpen,setIsOpen] = useState(true)
 

  return (
    <UserContext.Provider value={{ user, setUser,data,setData,isOpen,setIsOpen }}>
      {children}
    </UserContext.Provider>
  );
}