import { Box, Button, Paper, TextField, Typography } from '@mui/material';

const CreateContactForm = () => {
  return (
    <form>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Box component="header" mb={1}>
          <Typography>Добавить контакт</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mb: 2 }}>
          <TextField size="small" label="name" />
          <TextField size="small" label="phone" />
        </Box>
        <Box>
          <Button variant="contained">добавить</Button>
        </Box>
      </Paper>
    </form>
  );
};
export default CreateContactForm;
