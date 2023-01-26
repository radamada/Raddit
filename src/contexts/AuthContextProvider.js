import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {children}
    </AuthContext.Provider>
}