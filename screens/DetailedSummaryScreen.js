import React from 'react'
import { View,StyleSheet } from 'react-native'
import Pie from 'react-native-pie'
export default function DetailedSummaryScreen({route}) {
const  expenses=route.params.expenses;
  return (
    <View style={style.container}>


    </View>
  )
}



const style=StyleSheet.create({
container:{
flex:1,

}


})
