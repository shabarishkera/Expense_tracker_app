import React, { useLayoutEffect } from 'react'
import { View ,Text,StyleSheet} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../constants/constant';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

export default function ManageExpences({route}) {
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

  return (
   <View style={style.container}>
    <View style={style.deleteContainer}>
    {isEditing&&<EvilIcons name="trash" size={24} color={GlobalStyles.colors.error500}/>}
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