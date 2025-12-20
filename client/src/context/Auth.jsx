import { createContext, useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const navigate = useNavigate();
    const [user,setUser] = useState(null);
    const [token,setToken] = useState(
        localStorage.getItem('authToken') || null
    );
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        if(token){
            setUser({});
        }
        setLoading(false);
    },[token]);

    const login = async (data)=>{
        const res = await api.post('/auth/login',data);
        setToken(res.data.token);
        localStorage.setItem('authToken',res.data.token);
        setUser(res.data.user);
        navigate('/');
    };

    const register = async (data)=>{
        const res = await api.post('/auth/register',data);
        setToken(res.data.token);
        localStorage.setItem('authToken',res.data.token);
        setUser(res.data.user);
        navigate('/');
    };

    const logout = ()=>{
        setUser(null);
        setToken(null);
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return(
        <AuthContext.Provider value={{user,loading,login,register,logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = ()=> useContext(AuthContext);