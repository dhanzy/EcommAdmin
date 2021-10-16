import React from 'react';
import Order from '../Interface/order';

interface OrderContextProps {
    orders: Order[] | [];
    getAllOrdersContext: (data: Order[]) => void;
}

const OrdersContext = React.createContext<OrderContextProps>({
    orders: [],
    getAllOrdersContext: () => null
})

export const OrderProvider:React.FC = ({children}): JSX.Element => {
    const [orders, setOrders] = React.useState<Order[] | []>([])

    const getAllOrdersContext = React.useCallback((data: Order[])=> {
        setOrders(data)
    }, [])
    
    return (
        <OrdersContext.Provider value={{orders, getAllOrdersContext}}>
            {children}
        </OrdersContext.Provider>
    )
}

export const useOrderContext = () => React.useContext(OrdersContext)