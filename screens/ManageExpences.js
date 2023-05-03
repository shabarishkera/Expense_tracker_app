import React, { useContext, useLayoutEffect } from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/constant';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { context } from '../store/context';

export default function ManageExpences({route}) {
  const {removeExpense,addExpense,updateExpense}=useContext(context);
  const navigation=useNavigation();
const  id=route.params?.id;
isEditing=!!id;
useLayoutEffect(()=>{navigation.setOptions({
  title:isEditing?'edit':'Add Expense'
  
  })},[isEditing])
const closeManageExpense=()=>
{

  navigation.goBack();
}
const deleteExpense=()=>{
  removeExpense(id);
  navigation.goBack();

}

  return (
   <View style={style.container}>
    <View style={style.deleteContainer}>
    {isEditing&&<Button onPress={deleteExpense}><EvilIcons name="trash" size={24} color={GlobalStyles.colors.error500}/></Button>}
    </View>
    <View style={style.optionsContainer}>
<Button onPress={closeManageExpense}>Cancel</Button>
<Button>Confirm</Button>
    </View>
    
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
justifyContent:"space-evenly",
alignItems:'center'
}
})