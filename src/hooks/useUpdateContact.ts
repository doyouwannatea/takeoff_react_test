import { useState } from 'react';
import { useUpdateContactMutation } from '../api/contactApi';
import { Contact } from '../models/Contact';

export function useUpdateContact() {
  const [updateContact, result] = useUpdateContactMutation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>,
    contact?: Contact,
  ) {
    e.preventDefault();
    if (!name || !phone || !contact) return;
    try {
      await updateContact({ ...contact, name, phone }).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    name,
    setName,
    phone,
    setPhone,
    updateContact,
    result,
    onSubmit,
  };
}
