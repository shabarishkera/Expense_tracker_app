import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpences from './screens/AllExpences';
import RecentExpences from './screens/RecentExpences';
import ManageExpences from './screens/ManageExpences';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { GlobalStyles } from './constants/constant';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import StoreWrapper from './store/context';
export default function App() {
  const stack=createStackNavigator();
 const bottomtab=createBottomTabNavigator();
 function ExpenceOverView()
 {
  const navigation=useNavigation();
  const handleAddPress=()=>{
navigation.navigate("manageExpense")

  }
  return <bottomtab.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    headerRight:()=>
        <Pressable onPress={handleAddPress}>
<Entypo name="add-to-list" size={26} color="white" />
      </Pressable> 
,
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,

  }}>
  <bottomtab.Screen options={{title:'recent',tabBarLabel
:"recnet",tabBarIcon:({color,size})=>{
  return <Ionicons name="timer-outline" size={24} color="white" />
}
}} component={RecentExpences} name="Recent"/>
     <bottomtab.Screen options={{title:'AllExpenses',tabBarLabel
:"All",tabBarIcon:({color,size})=>{
  return <Ionicons name="calendar" size={24} color="white" />
}
}} component={AllExpences} name="allExpense"/>
  </bottomtab.Navigator>
 }
  return (
    <>
    <StoreWrapper >
     <StatusBar style="light" />
     <NavigationContainer>
    <stack.Navigator>
    <stack.Screen options={{headerShown:false}}  component={ExpenceOverView} name='overView' />
     <stack.Screen component={ManageExpences} name="manageExpense"
     options={{headerTintColor:'white',
     presentation:'modal',
     headerStyle:{backgroundColor:GlobalStyles.colors.primary500}}}
     />
 
      </stack.Navigator>
      </NavigationContainer>
      </StoreWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
