import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/useAuthContext';


type UnprotectedRouteProps = {
    children: JSX.Element;
    exact: boolean;
    path: string;
}


const UnprotectedRoute: React.FC<UnprotectedRouteProps> = ({children, ...rest}) => {
    const { loggedInUser } = useAuth();
    return (
        <>
            <Route 
                {...rest}
                render={({location})=>
                   loggedInUser ? <Redirect to={{ pathname: '/', state: {from: location}}} /> : children
               } 
            />
        </>
    )
}

export default UnprotectedRoute
