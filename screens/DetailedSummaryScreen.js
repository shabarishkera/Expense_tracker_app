import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import {GlobalStyles} from '../constants/constant'
export default function DetailedSummaryScreen({route}) {
const  expenses=route.params.expenses;
  return (
    <View style={style.container}>
      <View style={style.head}>
   <Text>detailed view</Text> 
   </View>
   <View style={style.body}><Text>this is body</Text></View>
    </View>
  )
}
const style=StyleSheet.create({
container:{
flex:1,
justifyContent:'center',
alignItems:'center',
padding:30,
backgroundColor:GlobalStyles.colors.back,
gap:20,
},
body:{
backgroundColor:'white',
flex:2,
width:'100%'
},
head:{
flex:1,
backgroundColor:'red',
width:'100%',
}


})
