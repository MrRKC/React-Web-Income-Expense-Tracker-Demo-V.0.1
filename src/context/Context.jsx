import React, { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reducer'

// Initial state transData
const TransactionData = {
    transData: []
}

// Create context
export const TransDataContext = createContext(TransactionData);

// Provider component
const ContextHandler = ( {children} ) => {
    const [transData, dispatch] = useReducer(Reducer, {}, () => {
        const localTransData = localStorage.getItem("transData");
        if (localTransData === null) {
            return TransactionData;
        }
    
        return JSON.parse(localTransData);
    });
    
    useEffect(() => {
        localStorage.setItem("transData", JSON.stringify(transData));
    },[transData])

    // Actions
    const addNewTransData = (newTransData) => {
        dispatch({
            type: "Add_NewTransData",
            newTransData: newTransData
        });
    }

    const editHandler = (id, editTransData) => {
        dispatch({
            type: "Edit_Handler",
            editId: id,
            editTransData: editTransData,
        });
    }

    const deleteHandler = (id) => {
        dispatch({
            type: "Delete_Handler",
            deleteId: id
        });
    }

    return (
        <TransDataContext.Provider value = {{
            transData: transData.transData,
            editHandler,
            addNewTransData,
            deleteHandler,
        }}>
            {children}
        </TransDataContext.Provider>
    );
}

export default ContextHandler;

