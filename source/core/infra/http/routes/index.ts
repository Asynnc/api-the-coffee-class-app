import { Router } from 'express';
import { adminRouter } from '../../../../domain/admin/infra/http/routes/admin.routes';

const routes = Router();

routes.use('/admin', adminRouter);

export { routes };
