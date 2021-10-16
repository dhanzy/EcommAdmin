import FetchOptions from '../Interface/FetchOptions';

const fetchInstance = process.env.REACT_APP_API_URL;


const getAllOrders = async()=> {
    const fetchOptions: FetchOptions = {
        method: "GET",
        headers: {
            'Content-Type':'application/json' 
        },
    }
    return await fetch(`${fetchInstance}/orders/`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("error occured"))
}

export default getAllOrders;