import FetchOptions from "../Interface/FetchOptions"

const fetchInstance = process.env.REACT_APP_API_URL;

const register = async (firstname:string, lastname:string, email:string, password:string) => {
    const fetchOptions: FetchOptions= {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({firstname,lastname,email,password}),
    }
    return await fetch(`${fetchInstance}/auth/register`, fetchOptions)
        .then((res) => res.json())
        .catch(() => ({
            error: {message: 'Unable to connect to server. Please try again'}
        }))
};

export default register;