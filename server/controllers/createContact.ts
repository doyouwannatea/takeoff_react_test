import { Request, Response } from 'express-serve-static-core';
import { getLogin, Router } from '../server';

export function createContact(req: Request, res: Response, router: Router) {
  const login = getLogin(req);
  const state = router.db.getState();
  if (!req.body.name || !req.body.phone) {
    return res.sendStatus(401);
  }

  const user = state.users.find((user) => user.login === login);
  if (!user) {
    return res.sendStatus(401);
  }
  state.contacts.push({
    ...req.body,
    userId: user.id,
    id: Math.floor(Math.random() * 1000000),
  });
  router.db.setState(state);
  res.sendStatus(200);
}
