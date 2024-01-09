import React, { useContext, useState } from 'react';
import { FaTrashAlt, FaCheck, FaEdit } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { TransDataContext } from '../../context/Context';

const TransactionItem = ( {transData} ) => {
    const [isEdit, setIsEdit] = useState(false);
    const [curTask, setCurTask] = useState("");
    const [curAmount, setCurAmount] = useState("");
    const [curPayment, setCurPayment] = useState("");
    const [curTransType, setCurTransType] = useState("");

    const { deleteHandler, editHandler} = useContext(TransDataContext);

    const id = transData.id;
    const task = transData.task;
    const amount = transData.amount;
    const payment = transData.payment;
    const transType = transData.transType;
    // console.log(transType);

    const onClickEdit = () => {
        setIsEdit(true);
        setCurTask(task);
        setCurAmount(amount); 
        setCurPayment(payment);
        setCurTransType(transType);
    }

    const onClickDone = () => {
        const editValues = {
            id: id,
            task:curTask,
            amount: Number(curAmount),
            payment: curPayment,
            transType: curTransType,
        }
        editHandler(id, editValues)
        setIsEdit(false);
    }

    const blockInvalidChar = (e) => {
        ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
    };

    const sign = transType === "INCOME" ? "+" : "-"
    const newAmount = new Intl.NumberFormat('th',{
        style: 'currency',
        currency: 'THB'
    }).format(amount).replace("฿","");

    if (isEdit) {
        return (
            <ul className="list">
                <li className={transType === "INCOME" ? 'plus' : 'minus'}>
                    <span>
                        <input type="text" value={curTask} onChange={e => setCurTask(e.target.value)}/>
                    </span> 

                    <span><input type="number" value={curAmount} onChange={e => setCurAmount(e.target.value)} onKeyDown={blockInvalidChar}/></span>

                    <span>
                        <select value={curPayment} onChange={e => setCurPayment(e.target.value)}>
                            {/* <option value=""></option> */}
                            <option value="Cash">Cash</option>
                            <option value="Credit Card">Credit Card</option> 
                            <option value="Bank App">Bank App</option>    
                            <option value="Bank">Bank</option>            
                        </select>
                    </span>

                    <span>
                        <select value={curTransType} onChange={e => setCurTransType(e.target.value)}>
                            <option value="INCOME">Income</option> 
                            <option value="EXPENSES">Expense</option>                
                        </select>
                    </span>

                    <button className='done-btn' onClick={onClickDone}><FaCheck /></button>
                    <button className='cancel-btn' onClick={() => setIsEdit(false)}><MdOutlineCancel /></button>
                </li>
            </ul>
        )
    }
    return ( 
        <ul className="list">
            <li className={transType === "INCOME" ? 'plus' : 'minus'}>
                <span className='task-container'>{task}</span> 
                <span className='payment-cotainer'>{payment}</span> 
                <span className='amount-container'>{sign}{newAmount}</span>
                <button className='edit-btn' onClick={onClickEdit}><FaEdit /></button>
                <button className='delete-btn' onClick={() => deleteHandler(id)}><FaTrashAlt /></button>    
            </li>
        </ul>
    )
}

export default TransactionItem

// if (isEdit) {
//     return (
//         <ul className="list">
//             <li className={transType === "INCOME" ? 'plus' : 'minus'}>
//                 <span>
//                     <input type="text" value={curTask} onChange={e => setCurTask(e.target.value)}/>
//                 </span> 

//                 <span>
//                     <select value={curPayment} onChange={e => setCurPayment(e.target.value)}>
//                         <option value=""></option>
//                         <option value="Cash">Cash</option>
//                         <option value="Credit Card">Credit Card</option> 
//                         <option value="Bank App">Bank App</option>                
//                     </select>
//                  </span>

//                 <span>
//                     <select value={curTransType} onChange={e => setCurTransType(e.target.value)}>
//                         <option value="INCOME">Income</option> 
//                         <option value="EXPENSES">Expense</option>                
//                     </select>
//                 </span>

//                 <span><input type="number" value={curAmount} onChange={e => setCurAmount(e.target.value)}/></span>

//                 <span><button onClick={onClickDone}>Done</button></span>

//                 <span><button onClick={() => setIsEdit(false)}>Cancel</button></span>
//              </li>
//         </ul>
//     )
// }

// return (
//     <ul className="list">
//         <li className={transType === "INCOME" ? 'plus' : 'minus'}>
//             {task}
//             <span>{payment}</span> 
//             <span>{amount}</span>
//             <span><button onClick={onClickEdit}>Edit</button></span>
//             <button className='delete-btn' onClick={() => deleteHandler(props.id)}>Delete</button>
//         </li>
//     </ul>
// )

