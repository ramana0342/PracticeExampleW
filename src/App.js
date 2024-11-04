
import './App.css';
import NestedRoutesApp from "./NestedRoutes/nestedRoutesApp";
import { configureStore } from '@reduxjs/toolkit';
import userReducesrs from "./NestedRoutes/redux";
import { Provider } from 'react-redux';

let storeRedux = configureStore({
  reducer:userReducesrs
})


function App() {
  return (
   <>
   <Provider store={storeRedux}>
   <NestedRoutesApp/> 
   </Provider>  
    </>
  );
}

export default App;
