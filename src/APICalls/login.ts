import FetchOptions from '../Interface/FetchOptions';
const fetchInstance = process.env.REACT_APP_API_URL;

const login = async(email:string, password: string) => {
    const fetchOptions:FetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({email,password})
    }
    return await fetch(`${fetchInstance}/auth/login`, fetchOptions)
        .then((res)=> res.json())
        .catch((error) => ({
            error: {message: "unable to connect to the server"}
        }))
};

export default login;