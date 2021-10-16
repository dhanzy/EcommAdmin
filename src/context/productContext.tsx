import React from 'react';
import Product from '../Interface/Product';


interface ProductContextProps {
    products: Product[] | [];
    updateProductsContext: (data: Product)=> void;
    getAllProductsContext: (data: Product[]) => void;
    removeProductContext: (data: string) => void;
}

const ProductContext = React.createContext<ProductContextProps>({
    products: [],
    updateProductsContext: () => null,
    getAllProductsContext: ()=> null,
    removeProductContext: ()=> null
})

export const ProductProvider: React.FC = ({children}): JSX.Element =>{
    const [products, setProducts] = React.useState<Product[] | []>([])

    const updateProductsContext = React.useCallback((data: Product) => {
        setProducts((prev) => [...prev, data] )
    }, [])

    const getAllProductsContext = React.useCallback((data: Product[]) => {
        setProducts(data)
    }, [])

    const removeProductContext = React.useCallback((productId: string) => {
        setProducts(products.filter(item => item._id !== productId))
    }, [products])
    
    return (
        <ProductContext.Provider value={{products, updateProductsContext, getAllProductsContext, removeProductContext}}> 
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => React.useContext(ProductContext)