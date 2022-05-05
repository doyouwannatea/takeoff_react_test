import { Box } from '@mui/material';
import ContactCard from './ContactCard';

const ContactsList = () => {
  return (
    <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {Array.from(new Array(6)).map((_, idx) => (
        <Box component="li" key={idx}>
          <ContactCard />
        </Box>
      ))}
    </Box>
  );
};

export default ContactsList;
