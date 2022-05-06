import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Contact } from '../models/Contact';
import { User } from '../models/User';
import { RootState } from '../store/store';

type CreateContactRequest = Pick<Contact, 'name' | 'phone'>;
type UpdateContactRequest = Contact;

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004/',
    prepareHeaders: (headers, { getState }) => {
      const login = (getState() as RootState).user.data?.login;
      // If we have a token set in state, let's assume that we should be passing it.
      if (login) {
        headers.set('authorization', `Bearer ${login}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    auth: builder.mutation<User, Pick<User, 'login' | 'password'>>({
      query: (userData) => ({
        url: 'auth',
        method: 'POST',
        body: userData,
      }),
    }),
    getAllContacts: builder.query<Contact[], void>({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    getContact: builder.query<Contact, number>({
      query: (id) => `contacts/${id}`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation<void, CreateContactRequest>({
      query: (contact) => ({
        url: 'contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation<void, number>({
      query: (contactId) => ({
        url: `contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation<void, UpdateContactRequest>({
      query: (contact) => ({
        url: `contacts/${contact.id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllContactsQuery,
  useGetContactQuery,
  useAuthMutation,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;
