import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useAuth } from '../../hooks/useAuth';

const AuthForm = () => {
  const { login, onSubmit, password, result, setLogin, setPassword } =
    useAuth();

  return (
    <form onSubmit={onSubmit} style={{ width: '100%', maxWidth: '31.25rem' }}>
      <Card variant="outlined" sx={{ p: 4, width: '100%' }}>
        <Typography variant="h6" component="h1" mb={2}>
          Войти
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
          <TextField
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogin(e.target.value)
            }
            value={login}
            label="login"
            required
            fullWidth
          />
          <TextField
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
            label="password"
            required
            fullWidth
          />
        </Box>
        <Box sx={{ pt: 2 }}>
          <Button type="submit" variant="contained">
            войти
          </Button>
        </Box>
        {result.isLoading && <Typography>loading...</Typography>}
        {result.isError && (
          <Typography mt={1} color="error">
            {String((result.error as FetchBaseQueryError).data)}
          </Typography>
        )}
      </Card>
    </form>
  );
};

export default AuthForm;
