import  Express from 'express';
import {check}  from 'express-validator';
import { createTodo, deleteTodo, readTodos, updateTodo } from '../controllers/todo.js';
import { isDate } from '../helpers/isDate.js';
import { isPriority } from '../helpers/isPriority.js';
import { validarCampos } from '../middlewares/validate-campos.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Express.Router();
//**  /todo  ** */
router.get('/',  readTodos);

router.use(validateJWT)

router.post('/', 
    [
        //check('creationDate', 'The creaiton date is required').notEmpty(),
        check('priority', 'The priority is required').notEmpty(),
        check('title', 'The title is required').notEmpty(),
        check('description', 'The description is required').notEmpty(),
        //check('creationDate','creationDate invalid').custom(isDate),
        check('priority','priority should be between 0 to 5').custom(isPriority),
        validarCampos
    ],
    createTodo
);


router.patch('/:id',
[
    check('priority', 'The priority is required').notEmpty(),
    check('title', 'The title is required').notEmpty(),
    check('description', 'The description is required').notEmpty(),
    check('priority','priority should be between 0 to 5').custom(isPriority),
    validarCampos
],
    updateTodo
);

router.delete('/:id',
    [
        //check('rol', 'El rol  es obligatorio').notEmpty(),
        //validar que haya creado
        validarCampos
    ],
    deleteTodo
);




export default  router;