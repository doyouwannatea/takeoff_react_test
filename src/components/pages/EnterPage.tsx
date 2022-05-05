import { Box } from '@mui/material';
import AuthForm from '../forms/AuthForm';
import RegisterForm from '../forms/RegisterForm';

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
      {/* <AuthForm /> */}
      <RegisterForm />
    </Box>
  );
};

export default EnterPage;
