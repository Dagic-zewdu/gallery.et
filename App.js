import BottomNavigator from './Navigation/BottomNavigator';
import {store,persistor} from "./redux/rootReducer"
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <BottomNavigator />
     </PersistGate>
    </Provider>
  );
}

