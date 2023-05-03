import React, { useContext } from 'react'
import { View,StyleSheet } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput'
import {context} from '../store/context'

export default function RecentExpences() {
const {data}=useContext(context);
  console.log(data)
  const recent=data.filter((expense)=>{
return true
  })
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