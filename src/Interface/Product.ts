

export default interface Product {
    _id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    size: string[];  
    categories: string[];
    total?: number;
    createdAt: Date;
}


export interface ProductApiSuccess {
    success: Product;
}