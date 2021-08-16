import './App.css';
import { Routes } from '../config';
import { Provider } from 'react-redux';
import store from '../config/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
