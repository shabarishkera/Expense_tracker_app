import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {GlobalStyles} from '../../constants/constant';
export default function ExpenseSummary({period, expenses}) {
    var totalamount = 0;
    for (let e of expenses) {
        totalamount += e.amount;
    }

    return (
        <View style={
            style.container
        }>
            <Text style={
                style.peroid
            }>
                {period}</Text>
            <Text style={
                style.sum
            }><FontAwesome name="rupee"
                    size={20}
                    color='white'/> {totalamount}</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: GlobalStyles.colors.summary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4

    },
    sum: {

        fontSize: 16,
        color: GlobalStyles.colors.primary400,
        fontWeight: 'bold',
        color: GlobalStyles.colors.item

    },
    peroid: {
        fontSize: 12,
        color: 'white',
        fontWeight: 'bold'


    }


})
