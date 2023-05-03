import React, { createContext, useReducer } from 'react'
import { View } from 'react-native';

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
        var  newstate= [
                ...state, {
                    ...action.payload
                }
            ]
            console.log(newstate);
           return newstate
        case 'delete':

            return  state.filter((item) => item.id != action.payload)
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
    function addExpense(expenseData) {
        id = new Date().toString() + Math.random().toString();
      
        dispatch({
            type: 'add',
            payload: {
               ... expenseData,
                id
            }
        })
    }
    function removeExpense(id) {
       
        dispatch({ type: 'delete', payload: id })
    }
    function updateExpense(data) {
       
        dispatch({ type: 'update', payload:data })
    }

     return <View style={{flex:1}}><context.Provider  value={{data,addExpense,removeExpense,updateExpense}}>{props.children}</context.Provider></View>
 }
export default StoreWrapper;
