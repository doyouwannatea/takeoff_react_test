import { useState } from 'react';
import { useCreateContactMutation } from '../api/contactApi';

export function useCreateContact() {
  const [createContact, result] = useCreateContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !phone) return;
    try {
      await createContact({ name, phone }).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    name,
    setName,
    phone,
    setPhone,
    createContact,
    result,
    onSubmit,
  };
}
