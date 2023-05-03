import React, { createContext, useReducer } from 'react'

const DUMMY = [
    {
        id: '1',
        title: 'ttt',
        amount: 122,
        date: new Date()
    }, {
        id: '2',
        title: 'tfdftt',
        amount: 122,
        date: new Date()
    }, {
        id: '3',
        title: 'ttfddt',
        amount: 122,
        date: new Date()
    }
];
 export const context = createContext([]);
 const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [
                ...state, {
                    ...action.payload
                }
            ]
        case 'delete':
            state.filter((item) => item.id != action.payload)
        case 'update':
            const toupdate = state.findIndex((expense) => expense.id == action.payload.id)
            const update = state[toupdate];
            const updated = {
                ...update,
                ...action.payload
            }
            const total = [...state];
            total[toupdate] = updated;
            return total;
        default:
            return state;
    }
};
const  StoreWrapper=(props)=>
 {
    const [data, dispatch] = useReducer(reducer,DUMMY);
    function addExpense({ expenseData }) {
        id = new Date.toString() + Math.random().toString();
        dispatch({
            type: 'add',
            payload: {
                expenseData,
                id
            }
        })
    }
    function removeExpense(id) {
        dispatch({ type: 'delete', payload: id })
    }
    function updateExpese(data) {
        dispatch({ type: 'update', payload: data })
    }

    return <context.Provider value={{data,addExpense,removeExpense,updateExpese}}>{props.children}</context.Provider>
 }
export default StoreWrapper;
