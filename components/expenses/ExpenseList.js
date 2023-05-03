import React from 'react'
import { FlatList,Text,StyleSheet } from 'react-native'
import Expenseitem from './Expenseitem'

export default function ExpenseList({expenses}) {
    const handlerender=(item)=>
    {
return <Expenseitem {...item.item} />

    }
  return (
    <FlatList data={expenses} renderItem={handlerender} key={(item)=>item.id} ></FlatList>
  )
}
const style=StyleSheet.create({
    container:
    {
    flex:1
    }
    })