import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetContactQuery } from '../../api/contactApi';
import { useUpdateContact } from '../../hooks/useUpdateContact';

type MatchParams = {
  id: string;
};

const UpdateContactForm = () => {
  const { name, phone, setName, setPhone, onSubmit } = useUpdateContact();
  const params = useParams<MatchParams>();
  const { data: contact, isLoading } = useGetContactQuery(Number(params.id));
  useEffect(reset, [contact]);

  function reset() {
    setName(contact?.name || '');
    setPhone(contact?.phone || '');
  }

  return (
    <form onSubmit={(e) => onSubmit(e, contact)}>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Box component="header" mb={1}>
          <Typography>Редактировать контакт</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column', mb: 2 }}>
          <TextField
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            size="small"
            label="name"
            value={name}
          />
          <TextField
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            size="small"
            label="phone"
            value={phone}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Button type="submit" variant="contained" disabled={isLoading}>
            сохранить
          </Button>
          <Button onClick={reset} color="error" disabled={isLoading}>
            отменить
          </Button>
        </Box>
      </Paper>
    </form>
  );
};
export default UpdateContactForm;
