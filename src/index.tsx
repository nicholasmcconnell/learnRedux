import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { store } from './store';



// //STORE -> GLOBALIZED STATE

// //ACTION -> DESCRIBES WHAT YOU WANT TO DO
// const increment = () => {
//   return {
//     type: 'INCREMENT',
//   }
// }

// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }

// //REDUCER -> DESCRIBES HOW YOUR ACTIONS TRANSFORM YOU STATE INTO THE NEXT STATE
// const counter = (state: number = 0, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }


// let store = createStore(counter(state, action));

// //display it in the councel
// store.subscribe(() => console.log(store.getState()));

// //DISPATCH -> EXC => cUTES THE ACTION
// store.dispatch(increment);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
