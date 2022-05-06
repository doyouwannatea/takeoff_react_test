import path from 'path';
import jsonServer from 'json-server';
import { Request } from 'express-serve-static-core';
import { DbState } from './models/DbState';
import { auth } from './controllers/auth';
import { createContact } from './controllers/createContact';

export type Router = jsonServer.JsonServerRouter<DbState>;

const PORT = 3004;
const dbPath = path.join(__dirname, 'db.json');
const server = jsonServer.create();
const router = jsonServer.router<DbState>(dbPath);
const middlewares = jsonServer.defaults();

export function getLogin(req: Request): string | undefined {
  if (!req.headers.authorization) return undefined;
  return req.headers.authorization.split(' ')[1];
}

function isAuthorized(req: Request): boolean {
  const state = router.db.getState();
  const login = getLogin(req);
  if (!login) return false;
  const user = state.users.find((user) => user.login === login);
  return Boolean(user);
}

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post('/auth', (req, res) => auth(req, res, router));
server.post('/contacts', (req, res) => createContact(req, res, router));

server.use((req, res, next) => {
  if (isAuthorized(req)) return next();
  res.sendStatus(401);
});
server.use(router);
server.listen(PORT, () => {
  console.log(`JSON Server is running at port ${PORT}`);
});
