import Product from './Product';
import Customer from './Customer';


interface CartProps {
    _id: string;
    quantity: number;
    size: string;
    product: Product;
    createdAt: Date;
}


export default interface Order {
    _id: string;
    products: CartProps[];
    ref: string;
    status: string;
    total: number;
    customer: Customer;
    createdAt: Date;
}
