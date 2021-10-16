import React from 'react';
import Invoice from '../Interface/Invoice';


interface InvoiceContextProps {
    invoices: Invoice[] | [];
    getAllInvoicesContext: (data: Invoice[]) => void;
}
const InvoiceContext = React.createContext<InvoiceContextProps>({
    invoices: [],
    getAllInvoicesContext: () => null
})

export const InvoiceProvider:React.FC = ({children}): JSX.Element => {
    const [invoices, setInvoices] = React.useState<Invoice[] | []>([])

    const getAllInvoicesContext = React.useCallback((data: Invoice[])=> {
        setInvoices(data)
    }, [])

    return (
        <InvoiceContext.Provider value={{invoices, getAllInvoicesContext}}>
            {children}
        </InvoiceContext.Provider>
    )
}

export const useInvoiceContext = () => React.useContext(InvoiceContext)