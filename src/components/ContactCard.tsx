import { Button, Card, Divider, Typography } from '@mui/material';
import { Contact } from '../models/Contact';

type Props = {
  contact: Contact;
  onDelete: (contact: Contact) => void;
  onUpdate: (contact: Contact) => void;
};

const ContactCard: React.FC<Props> = ({ contact, onDelete, onUpdate }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        gap: 1,
        padding: 0.75,
        borderRadius: 0,
        alignItems: 'center',
      }}
    >
      <Typography>{contact.name}</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>{contact.phone}</Typography>
      <Divider sx={{ ml: 'auto' }} orientation="vertical" flexItem />
      <Button onClick={() => onUpdate(contact)} component="span">
        редактировать
      </Button>
      <Button onClick={() => onDelete(contact)} color="error">
        удалить
      </Button>
    </Card>
  );
};

export default ContactCard;
