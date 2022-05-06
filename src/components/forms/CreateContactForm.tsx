import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useCreateContact } from '../../hooks/useCreateContact';

const CreateContactForm = () => {
  const { onSubmit, name, phone, setName, setPhone } = useCreateContact();

  return (
    <form onSubmit={onSubmit}>
      <Card variant="outlined" sx={{ p: 2 }}>
        <Box component="header" mb={1}>
          <Typography>Добавить контакт</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mb: 2 }}>
          <TextField
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            value={name}
            size="small"
            label="name"
          />
          <TextField
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            value={phone}
            size="small"
            label="phone"
          />
        </Box>
        <Box>
          <Button type="submit" variant="contained">
            добавить
          </Button>
        </Box>
      </Card>
    </form>
  );
};
export default CreateContactForm;
