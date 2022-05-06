import { Box } from '@mui/material';
import { Contact } from '../models/Contact';
import ContactCard from './ContactCard';

type Props = {
  contactsList: Contact[];
  onDelete: (contact: Contact) => void;
  onUpdate: (contact: Contact) => void;
};

const ContactsList: React.FC<Props> = ({
  contactsList,
  onDelete,
  onUpdate,
}) => {
  return (
    <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {contactsList.map((contact) => (
        <Box component="li" key={contact.id}>
          <ContactCard
            contact={contact}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ContactsList;
