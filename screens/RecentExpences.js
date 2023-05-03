import React, { useContext } from 'react'
import { View,StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'
import {context} from '../store/context'
import gerecent from '../functions/getrecent'
export default function RecentExpences() {
const {data}=useContext(context);

  const recent=data.filter((expense)=>{
const today=new Date();
const datebefore7=gerecent(today,7);
return expense.date>datebefore7;
  });
  return (
   
    <View style={style.container}>
        <ExpensesOutput  period={'last 7 days'} expenses={recent}/>
    </View>
  )
}
const style=StyleSheet.create({
container:
{
flex:1
}
})