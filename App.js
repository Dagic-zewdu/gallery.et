import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from './components/navbar/BottomNavigator';
import Navigator from './Navigation';
import {store} from "./redux/rootReducer"

export default function App() {
  return (
    <Provider store={store}>
    <BottomNavigator />
    </Provider>
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
