import { Box, Button, Card, Divider, Typography } from '@mui/material';

const AppHeader = () => {
  return (
    <Card
      component="header"
      variant="outlined"
      sx={{
        borderRadius: 0,
        display: 'flex',
        p: (theme) => `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
        <Typography>username</Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button>выйти</Button>
      </Box>
    </Card>
  );
};

export default AppHeader;
