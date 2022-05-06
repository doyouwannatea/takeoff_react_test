import { Box, Button, Card, Divider, Typography } from '@mui/material';

type Props = {
  username: string;
  onLogout: () => void;
};

const AppHeader: React.FC<Props> = ({ onLogout, username }) => {
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
        <Typography>{username}</Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button onClick={onLogout}>выйти</Button>
      </Box>
    </Card>
  );
};

export default AppHeader;
