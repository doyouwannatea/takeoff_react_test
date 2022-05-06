import { Box } from '@mui/material';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CreateContactForm from '../forms/CreateContactForm';
import UpdateContactForm from '../forms/UpdateContactForm';
import ContactsPage from '../pages/ContactsPage';
import EnterPage from '../pages/EnterPage';
import RequireAuth from './RequireAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnterPage />} />
        <Route
          path="contacts"
          element={
            <RequireAuth>
              <ContactsPage />
            </RequireAuth>
          }
        >
          <Route index element={<CreateContactForm />} />
          <Route
            path=":id"
            element={
              <>
                <Box mb={1}>
                  <Link to="/contacts">добавить контакт</Link>
                </Box>
                <UpdateContactForm />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
