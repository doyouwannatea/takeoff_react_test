import { Request, Response } from 'express-serve-static-core';
import { Router } from '../server';

export function auth(req: Request, res: Response, router: Router) {
  const state = router.db.getState();
  if (!state.users || !req.body.login || !req.body.password) {
    res.sendStatus(401);
    return;
  }
  const login = req.body.login.toString().trim();
  const password = req.body.password.toString().trim();

  const user = state.users.find((user) => user.login === login);

  if (Boolean(user) && user?.password === password) {
    res.json({ ...user });
    return;
  }

  res.sendStatus(401);
}
