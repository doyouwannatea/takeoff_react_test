import { Button, Card, Divider, Typography } from '@mui/material';

const ContactCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        gap: 1,
        padding: 0.75,
        borderRadius: 0,
        alignItems: 'center',
      }}
    >
      <Typography>name</Typography>
      <Divider orientation="vertical" flexItem />
      <Typography>89643500253</Typography>
      <Divider sx={{ ml: 'auto' }} orientation="vertical" flexItem />
      <Button>редактировать</Button>
      <Button color="error">удалить</Button>
    </Card>
  );
};

export default ContactCard;
