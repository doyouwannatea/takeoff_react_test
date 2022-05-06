import { Provider } from 'react-redux';
import { store } from '../store/store';
import Router from './router/Router';
import ThemeProvider from './ThemeProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
