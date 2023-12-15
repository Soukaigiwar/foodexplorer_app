import { createContext, useContext } from "react";
import { api } from "../services/api";

export const RoleContext = createContext({});

function RoleProvider({ children }) {
    async function isAdmin() {
        const response = await api.get("/users");
        const { role } = response.data;
        
        if (role && role === "admin") return true;

        return false;
    }

    return (
        <RoleContext.Provider value={{
            isAdmin
        }}
        >
            {children}
        </RoleContext.Provider>
    );
}

function useRole() {
    const context = useContext(RoleContext);

    return context;
}

export { RoleProvider, useRole };
