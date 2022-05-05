import { Container, Grid } from '@mui/material';
import AppHeader from '../AppHeader';
import ContactsList from '../ContactsList';
import ChangeContactForm from '../forms/ChangeContactForm';
import CreateContactForm from '../forms/CreateContactForm';

const ContactsPage = () => {
  return (
    <>
      <AppHeader />
      <Container component="section" sx={{ mt: 2 }}>
        <Grid container spacing={4}>
          <Grid component="aside" item sm={5} md={4}>
            <CreateContactForm />
            {/* <ChangeContactForm /> */}
          </Grid>
          <Grid item sm>
            <ContactsList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ContactsPage;
