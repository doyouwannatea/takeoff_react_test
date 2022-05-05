import { Box, Button, Paper, TextField, Typography } from '@mui/material';

const ChangeContactForm = () => {
  return (
    <form>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Box component="header" mb={1}>
          <Typography>Редактировать контакт</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mb: 2 }}>
          <TextField size="small" label="name" />
          <TextField size="small" label="phone" />
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Button variant="contained">сохранить</Button>
          <Button color="error">отменить</Button>
        </Box>
      </Paper>
    </form>
  );
};
export default ChangeContactForm;
