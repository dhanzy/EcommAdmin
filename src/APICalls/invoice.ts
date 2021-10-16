import FetchOptions from '../Interface/FetchOptions';

const fetchInstance = process.env.REACT_APP_API_URL;

const getAllInvoices = async()=> {
    const fetchOptions: FetchOptions = {
        method: "GET",
        headers: {
            'Content-Type':'application/json' 
        }
    }
    return await fetch(`${fetchInstance}/invoices/`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("error occured"))
}

export default getAllInvoices;