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
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// FIREBASE
import './firebase/firebase';

// MAIN COMPONENT
import AppRouter from './routers/AppRouter';

// Arquivos de Teste (pasta ZONA)
// import './ZONA/promises';

const store = configStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Carregando...</p>, document.getElementById('root'));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('root'));
// });

ReactDOM.render(jsx, document.getElementById('root'));
