import { Container, Grid } from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from '../../api/contactApi';
import { logout } from '../../features/user/userSlice';
import { Contact } from '../../models/Contact';
import { useAppDispatch, useAppSelector } from '../../store/store';
import AppHeader from '../AppHeader';
import ContactsList from '../ContactsList';

const ContactsPage = () => {
  const userData = useAppSelector((state) => state.user.data);
  const contactsList = useAppSelector((state) => state.user.contacts) || [];
  const { isLoading, isError, error } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function onContactDelete(contact: Contact) {
    try {
      await deleteContact(contact.id).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  function onContactUpdate(contact: Contact) {
    navigate(`/contacts/${contact.id}`);
  }

  function onLogout() {
    navigate(`/`);
    dispatch(logout());
  }

  return (
    <>
      <AppHeader username={userData?.login || ''} onLogout={onLogout} />
      <Container component="section" sx={{ mt: 2 }}>
        <Grid container spacing={4}>
          <Grid component="aside" item sm={5} md={4}>
            <Outlet />
          </Grid>
          <Grid item sm>
            {isLoading && 'loading...'}
            {isError && (error as FetchBaseQueryError).status}
            <ContactsList
              contactsList={contactsList}
              onDelete={onContactDelete}
              onUpdate={onContactUpdate}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ContactsPage;
