import React from 'react';
import { useHistory } from 'react-router-dom';
import { AuthApiDataSuccess } from '../Interface/AuthApiData';
import User from '../Interface/User';

interface IAuthContext {
    loggedInUser: User | undefined;
    updateLoginContext: (data: AuthApiDataSuccess)=> void;
}

export const AuthContext = React.createContext<IAuthContext>({
    loggedInUser: undefined,
    updateLoginContext: () => null,
});


export const AuthProvider: React.FC = ({children}): JSX.Element => {
    const [ loggedInUser, setLoggedInUser ] = React.useState<User | undefined>()
    const history = useHistory()

    const updateLoginContext = React.useCallback((data:AuthApiDataSuccess)=>{
        setLoggedInUser(data.success);
        history.push('/');
    }, [history])

    return (
    <AuthContext.Provider value={{loggedInUser, updateLoginContext}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)