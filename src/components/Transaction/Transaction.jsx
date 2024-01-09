import React, { useContext, useState } from 'react'
import TransactionItem from './TransactionItem'
import TransactionSelect from './TransactionSelect'
import Balance from '../Balance/Balance';
import IncomeExpenses from '../IncomeExpenses/IncomeExpenses';
import AddTransDataView from './AddTransDataView';
import './Transaction.css'
import { TransDataContext } from '../../context/Context';


const Transaction = () => {
    const { transData } = useContext(TransDataContext);

    const [curtransType, setCurTransType] = useState("");

    const filteredData = transData.filter(transData => transData.transType !== String(curtransType));

    return (
        <div className='Transaction'>
            <Balance />
            <AddTransDataView />
            <IncomeExpenses />
            <TransactionSelect curtransType={curtransType} setCurTransType={setCurTransType} />
            
            {
                filteredData.map((data) => (
                    <TransactionItem key = {data.id}
                        transData = {data}
                    />
                ))
            }
        </div>
    )
}

export default Transaction

// const addNewTransData = (newTrans) => {
    //     // console.log(newTrans)
    //     const newTransData = {
    //         ...newTrans
    //     }
    //     setTransData([newTransData, ...transData])
    // }

    // const editHandler = (id, trans) => {
    //     const newTransDataEdit = [...transData];
    //     const index = transData.findIndex(e => e.id === id);
    //     newTransDataEdit[index] = {...trans};
    //     setTransData(newTransDataEdit);
    // }

    // const deleteHandler = (id) => {
    //     const newTransDataDel = transData.filter(e => e.id !== id);
    //     setTransData(newTransDataDel);
    // }