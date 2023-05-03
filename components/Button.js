import React from 'react'
import { Pressable ,StyleSheet,View,Text} from 'react-native'
import { GlobalStyles } from '../constants/constant'
export default function Button({onPress,children}) {
  return (
    <View style={style.contaier}>

   
   <Pressable onPress={onPress} android_ripple={{backgroundColor:'black'}}>
    <View style={style.textcontainer}>
<Text style={style.text}>{children}</Text>
</View>
   </Pressable>
    </View>
  )
}

const style=StyleSheet.create({
contaier:{padding:8,
  backgroundColor:GlobalStyles.colors.primary50,
  borderRadius:4,


},
text:{
textAlign:'center',
fontSize:16,
color:GlobalStyles.colors.primary500,

},
textcontainer:{
  backgroundColor:GlobalStyles.colors.primary50,
  padding:0,
  borderRadius:5
}


})