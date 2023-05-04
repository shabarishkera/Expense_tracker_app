import React, { useContext, useLayoutEffect } from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/constant';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { context } from '../store/context';
import ExpenseForm from '../components/ExpenseForm';
import { ScrollView } from 'react-native-gesture-handler';
import { deletefireExpense } from '../functions/http';

export default function ManageExpences({route}) {
  const {removeExpense,addExpense,updateExpense}=useContext(context);
  const navigation=useNavigation();
const  id=route.params?.id;

const isEditing=!!id;
useLayoutEffect(()=>{navigation.setOptions({
  title:isEditing?'edit':'Add Expense'
  
  })},[isEditing])
const closeManageExpense=()=>
{

  navigation.goBack();
}
const deleteExpense=async()=>{
  console.log(id)
await deletefireExpense(id);
  removeExpense(id);
  navigation.goBack();

}


  return (
    
   <View style={style.container}>
    <ScrollView style={{flex:1}}>
    <View style={style.deleteContainer}>
    {isEditing&&<Button onPress={deleteExpense}><EvilIcons name="trash" size={24} color={GlobalStyles.colors.error500}/></Button>}
    </View>
    <View>
   
<ExpenseForm isEditing={isEditing} id={id}></ExpenseForm>

    </View>
 
    </ScrollView>
    </View>
   
  )
}

const style=StyleSheet.create({
  container:
  {flex:1,
  padding:24,
backgroundColor:GlobalStyles.colors.primary500},
deleteContainer:{
  marginTop:20,
  padding:15,
  backgroundColor:GlobalStyles.colors.primary50,
  elevation:6,
  alignItems:'center',
  borderRadius:5,
},
optionsContainer:{
flexDirection:'row',
flex:1,
justifyContent:"space-evenly",
alignItems:'center'
}
})