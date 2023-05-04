import React, { useContext, useEffect, useState } from 'react'
import { Text,View,StyleSheet, Alert
 } from 'react-native'
import Input from './Input'
import Button from './Button';
import { context } from '../store/context';
import { useNavigation } from '@react-navigation/native';
import format from '../functions/date';
import{editExpense, storeExpense} from '../functions/http'
export default function ExpenseForm({isEditing,id}) {
  console.log(id,isEditing)
const[input,setInput]=useState({
amount:"",
date:'',
title:''

});

const navigation=useNavigation();
const {addExpense,updateExpense,data}=useContext(context);
 useEffect(()=>{ 
  if(id)
{
 const defaultexpense=data.find((xpense)=>xpense.id==id);
 const defaultamount=defaultexpense.amount;
 const defaultdate=format(defaultexpense.date);

 const defaulttitle=defaultexpense.title;
 setInput({title:defaulttitle,id:id,amount:defaultamount.toString(),date:defaultdate})
} },[]);

 const handleConfirm=async ()=>
 {
 const expense={
  title:input.title,
  date:new Date(input.date),
  amount:parseInt(input.amount)
 }
const isamtvalid=!isNaN(expense.amount)&&expense.amount>0
const isdatevalid=expense.date.toString()!=='Invalid Date';
const istitleValid=expense.title.trim().length>0;
if(!isamtvalid||!isdatevalid||!istitleValid)
{
Alert.alert("Invalid","Given input is invalid")
return ;  
}

 if(isEditing)
 {
 updateExpense({...expense,id:id});
 editExpense(id,expense);
 }
 else
 {
   const id=await storeExpense(expense)
  addExpense({...expense,id:id});

 }
 navigation.goBack();
 }
 function closeManageExpense()
 {

navigation.goBack();

 }
    const inputChangehandler=(changed,value)=>{
     setInput((old)=>{return {...old,[changed]:value}})

    }
  return (
    <View>
<Input lable='Title' config={{onChangeText:inputChangehandler.bind(this,'title'),autoCapitalize:'none',autoCorrect:false,value:input['title'], keyboardType:'default'} } />
<Input lable='date' config={{onChangeText:inputChangehandler.bind(this,'date'),value:input['date'],autoCapitalize:'none',autoCorrect:false, placeholder:'YYYY-MM-DD', keyboardType:'decimal-pad'} } />
<Input lable='amount' config={{onChangeText:inputChangehandler.bind(this,'amount'),value:input['amount'],autoCapitalize:'none',autoCorrect:false, keyboardType:'number-pad'} } />
<View style={style.optionsContainer}>
<Button onPress={closeManageExpense}>Cancel</Button>
<Button onPress={handleConfirm}>Confirm</Button>
    </View>
    </View>
  )
}
const style=StyleSheet.create({
  optionsContainer:{
    flexDirection:'row',
    flex:1,
    justifyContent:"space-evenly",
    alignItems:'center'
    }

})