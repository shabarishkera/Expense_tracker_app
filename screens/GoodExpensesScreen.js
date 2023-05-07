import {useState,useEffect,React} from 'react'
import {FlatList, Text, StyleSheet} from 'react-native'
import Expenseitem from '../components/expenses/Expenseitem';
import {Colors} from 'react-native/Libraries/NewAppScreen'
import {GlobalStyles} from '../constants/constant'
import { getMardked } from '../functions/MarkedExpensehttps'
export default function GoodExpensesScreen() {
    const handlerender = (item) => {
        return <Expenseitem {...item.item}/>

    }
   
   const [marked,setmarked]=useState([]);

useEffect(async ()=>{
 const data=await getMardked();
 const filterd=data.filter((item)=>item.tag=='GOOD')
setmarked(filterd);
} ,[])
    return (
        <FlatList data={marked} contentContainerStyle={{paddingBottom:56}}
        showsVerticalScrollIndicator={false}
            renderItem={handlerender}
            key={
                (item) => item.item.id
        }></FlatList>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 32,
        backgroundColor: GlobalStyles.colors.back
    }
})
