import Express from 'express';
import authentication from'./auth.js';
import todos  from './todos.js';

const router =Express.Router();
//auth| create, login, renew
router.use('/auth', authentication);

//CRUD: todo
router.use('/todo',todos);

export default router;