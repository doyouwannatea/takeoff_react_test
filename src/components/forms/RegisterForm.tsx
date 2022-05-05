import { Box, Button, Card, TextField, Typography } from '@mui/material';

const RegisterForm = () => {
  return (
    <form style={{ width: '100%', maxWidth: '31.25rem' }}>
      <Card variant="outlined" sx={{ p: 4 }}>
        <Typography variant="h6" component="h1" mb={2}>
          Зарегистрироваться
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
          <TextField label="login" fullWidth />
          <TextField label="password" fullWidth />
          <TextField label="password again" fullWidth />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 2 }}>
          <Button variant="contained">зарегистрироваться</Button>
          <Typography variant="caption">или</Typography>
          <Button>войти</Button>
        </Box>
      </Card>
    </form>
  );
};

export default RegisterForm;
