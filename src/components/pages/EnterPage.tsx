import { Box } from '@mui/material';
import AuthForm from '../forms/AuthForm';

const EnterPage = () => {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
        flexWrap: 'wrap',
        padding: 2,
      }}
    >
      <AuthForm />
    </Box>
  );
};

export default EnterPage;
