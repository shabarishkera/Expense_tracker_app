import React, { useContext, useState } from 'react'
import { Text,View,StyleSheet
 } from 'react-native'
import Input from './Input'
import Button from './Button';
import closeManageExpense from '../functions/closeManageExpense';
import { context } from '../store/context';
import { useNavigation } from '@react-navigation/native';
export default function ExpenseForm({isEditing,id}) {
  console.log(id,isEditing)
const[input,setInput]=useState({
amount:"",
date:'',
title:''

});

const navigation=useNavigation();
const {addExpense,updateExpense}=useContext(context);
 const handleConfirm=()=>
 {
 const expense={
  title:input.title,
  date:new Date(input.date),
  amount:parseInt(input.amount)

 }
 console.log(expense)
 if(isEditing)
 updateExpense({...expense,id:id})
 else
 {
  addExpense(expense);

 }
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