import React, { useContext } from 'react'
import {View, Text ,StyleSheet} from 'react-native'
import ExpenseSummary from './expenses/ExpenseSummary'
import ExpenseList from './expenses/ExpenseList'
import { GlobalStyles } from '../constants/constant'
import context from '../store/context'
import StoreWrapper from '../store/context'
export default function ExpensesOutput({ period,expenses}) {
   

    return (
      
        <StoreWrapper>
        <View style={style.container}>
            <ExpenseSummary period={period}
                expenses={expenses}/>
            <View>
                <ExpenseList expenses={expenses}/>
            </View>

        </View>
        <Text></Text>
        </StoreWrapper>
    )
}
 const style=StyleSheet.create({
container:{
    flex:1,
    padding:23,
    backgroundColor:GlobalStyles.colors.primary700


}


 })