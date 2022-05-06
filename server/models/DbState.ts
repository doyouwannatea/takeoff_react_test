import { Contact } from '../../src/models/Contact';
import { User } from '../../src/models/User';

export type DbState = {
  users: User[];
  contacts: Contact[];
};
