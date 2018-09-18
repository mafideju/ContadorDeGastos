// STYLES
import './index.scss';
import 'react-dates/lib/css/_datepicker.css';

// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX // REACT-REDUX
import configStore from './store/configStore';
import { Provider } from 'react-redux';

// COMPONENTS
import { startSetExpenses } from './actions/expenses';
import { startRemoveExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// FIREBASE
import { firebase } from './firebase/firebase';

// MAIN COMPONENT
import AppRouter, { history } from './routers/AppRouter';

// Arquivos de Teste (pasta ZONA)
// import './ZONA/promises';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Carregando...</p>, document.getElementById('root'));

// ReactDOM.render(jsx, document.getElementById('root'));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
    console.log('logado');
  } else {
    renderApp();
    history.push('/');
    console.log('deslogado');
  }
});
