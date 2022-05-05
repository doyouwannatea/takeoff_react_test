import { Box, Button, Card, TextField, Typography } from '@mui/material';

const AuthForm = () => {
  return (
    <form style={{ width: '100%', maxWidth: '31.25rem' }}>
      <Card variant="outlined" sx={{ p: 4, width: '100%' }}>
        <Typography variant="h6" component="h1" mb={2}>
          Войти
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
          <TextField label="login" fullWidth />
          <TextField label="password" fullWidth />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 2 }}>
          <Button variant="contained">войти</Button>
          <Typography variant="caption">или</Typography>
          <Button>зарегистрироваться</Button>
        </Box>
      </Card>
    </form>
  );
};

export default AuthForm;
