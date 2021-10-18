import { Router } from 'express';

import OportunidadeController from './app/controllers/OportunidadeController';

const routes = new Router();

routes.get('/deals', OportunidadeController.index);
routes.post('/deals', OportunidadeController.store);

export default routes;
