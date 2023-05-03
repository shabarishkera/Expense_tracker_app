import { useNavigation } from "@react-navigation/native";

  export default function closeManageExpense()
 {
console.log('closed')
const navigation=useNavigation();
navigation.goBack();

 }