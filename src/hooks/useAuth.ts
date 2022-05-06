import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthMutation } from '../api/contactApi';

export function useAuth() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [auth, result] = useAuthMutation();
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!login || !password) return;
    try {
      await auth({ login, password }).unwrap();
      navigate('/contacts');
    } catch (error) {
      console.log(error);
    }
  }

  return { onSubmit, login, setLogin, password, setPassword, result };
}
