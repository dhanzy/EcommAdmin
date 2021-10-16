import FetchOptions from '../Interface/FetchOptions';

const fetchInstance = process.env.REACT_APP_API_URL;

export const addProduct = async(title:string, description: string, image: any, price: number, categories: string[], size: string[], total: number)=> {
    const fetchOptions: FetchOptions = {
        method: "POST",
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify({title, description, image, price, categories, size, total}),
        credentials: "include"
    }
    return await fetch(`${fetchInstance}/product/`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("error occured"))
}


export const putProduct = async(productId: string | undefined, title:string, description: string, image: any, price: number, categories: string[], size: string[] | [], total: number)=> {
    const fetchOptions: FetchOptions = {
        method: "PUT",
        headers: {
            'Content-Type':'application/json' 
        },
        body: JSON.stringify({title, description, image, price, categories, size, total}),
        credentials: "include"
    }
    return await fetch(`${fetchInstance}/product/${productId}`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("error occured"))
}

export const getAllProducts = async()=> {
    const fetchOptions: FetchOptions = {
        method: "GET",
        headers: {
            'Content-Type':'application/json' 
        },
    }
    return await fetch(`${fetchInstance}/product/`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("error occured"))
}


export const getProductById = async(productId: string)=> {
    const fetchOptions: FetchOptions = {
        method: "GET",
        headers: {
            'Content-Type':'application/json' 
        },
    }
    return await fetch(`${fetchInstance}/product/${productId}`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("error occured"))
}

export const deleteProductById = async(productId: string)=> {
    const fetchOptions: FetchOptions = {
        method: "DELETE",
        headers: {
            'Content-Type':'application/json' 
        },        
    }
    return await fetch(`${fetchInstance}/product/${productId}`, fetchOptions)
    .then((res) => res.json())
    .catch((err) => console.log("Error occured"))
}

interface UploadImageProps {
    image: File;
  }


export const uploadImage = async({ image }: UploadImageProps)=> {
    const formData = new FormData()
    formData.append('file', image)
    const fetchOptions: FetchOptions = {
        method: 'POST',
        body: formData,
    }
    return await fetch(`${fetchInstance}/api/image/`, fetchOptions)
        .then((res)=> res.json())
        .catch(()=> ({
            error: { message :'Error Occured' }
        }));
}