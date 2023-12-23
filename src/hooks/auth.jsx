import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, role, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                }
            ));

            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({ user, role, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar.");
            }
        }

        return;
    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");
        
        setData({});
    }

    async function updateDishImage({ dish, dishImageFile }) {
        
        try {

            if (dishImageFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("dishes", dishImageFile);
                
                const response = await api.patch("/dishes", fileUploadForm);
                
                dish.image = response.data.image;
            }
            
            // await api.put("/users", user);
            // localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

            // setData({ user, token: data.token});
            // alert("Perfil atualizado.");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if (token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateDishImage,
            user: data.user
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
