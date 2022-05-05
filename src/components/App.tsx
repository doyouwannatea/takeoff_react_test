import ThemeProvider from './ThemeProvider';
// import ContactsPage from './pages/ContactsPage';
import EnterPage from './pages/EnterPage';

const App = () => {
  return (
    <ThemeProvider>
      <EnterPage />
    </ThemeProvider>
  );
};

export default App;
