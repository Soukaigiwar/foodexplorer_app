import { createContext, useContext, useState } from "react";

export const CacheContext = createContext();

const CacheProvider = ({ children }) => {
    const [cache, setCache] = useState(() => {
        const localCache = localStorage.getItem("@foodexplorer:cart");
        return localCache ? JSON.parse(localCache) : [];
    });

    const clearCache = () => {
        console.log("dentro do clear cache");
        // setNewItem([]);
        setCache([]);
        localStorage.removeItem("@foodexplorer:cart");
    };

    return (
        <CacheContext.Provider value={{ cache, clearCache }}>
            {children}
        </CacheContext.Provider>
    );
};

function useCache() {
    const context = useContext(CacheContext);

    return context;
}

export { CacheProvider, useCache };