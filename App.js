import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AllExpences from './screens/AllExpences';
import RecentExpences from './screens/RecentExpences';
import ManageExpences from './screens/ManageExpences';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { GlobalStyles } from './assets/constant';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const stack=createStackNavigator();
 const bottomtab=createBottomTabNavigator();
 function ExpenceOverView()
 {
  return <bottomtab.Navigator screenOptions={{
    headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
    headerTintColor:'white',
    tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
    tabBarActiveTintColor:GlobalStyles.colors.accent500,

  }}>
  <bottomtab.Screen options={{title:'recent',tabBarLabel
:"recnet",tabBarIcon:({color,size})=>{
  return <Ionicons name="timer-outline" size={24} color="white" />
}
}} component={RecentExpences} name="Recent"/>
     <bottomtab.Screen options={{title:'All Expence',tabBarLabel
:"All",tabBarIcon:({color,size})=>{
  return <Ionicons name="calendar" size={24} color="white" />
}
}} component={ManageExpences} name="ManageExpences"/>
  </bottomtab.Navigator>
 }
  return (
    <>
     <StatusBar style="light" />
     <NavigationContainer>
    <stack.Navigator>
    <stack.Screen options={{headerShown:false}}  component={ExpenceOverView} name='overView' />
     <stack.Screen component={AllExpences} name="AllExpences"/>
 
      </stack.Navigator>
      </NavigationContainer>
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
