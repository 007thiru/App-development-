import { createContext, useContext } from "react";

const UserContext = createContext();

export const useUser = () =>{
    return useContext(UserContext);
}
const UserProvider = () => {
    const[isUserLoggeIn, setIsUserLoggedIn] = useState(false);

    const login = () => {
        setIsUserLoggedIn(true);
    }

    const logout = () => {
        setIsUserLoggedIn(false);
    }
    const uservalue = useMemo(() => (
        {
            isUserLoggeIn, login, logout
        }
    ), [isUserLoggIn]);

    return (
        <UserContext.Provider value={userValue}>
            {children}  
        </UserContext.Provider>
    )
}