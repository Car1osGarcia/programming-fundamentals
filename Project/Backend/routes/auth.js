import Express from 'express';
import {check}  from 'express-validator';
import {createUser, loginUser, logOut, revalidateUser} from '../controllers/auth.js';
import { validarCampos } from '../middlewares/validate-campos.js';
import { validateJWT } from '../middlewares/validate-jwt.js';

const router = Express.Router();
//router.post('/login',login);
router.post('/new', 
    [
        check('name', 'The name is required').notEmpty(),
        check('lastName', 'The last name is required').notEmpty(),
        check('email', 'The email is required').notEmpty(),
        check('password', 'The password is required').notEmpty(),
        check('email', 'The email is not valid').isEmail(),
        check('password', 'The password must be 7 characters at least').isLength({min: 6}),
        validarCampos
    ],
    createUser
);

router.post('/',
    [
        check('email', 'The email is required').isEmail(),
        check('password', 'The password is required').notEmpty(),
        check('password', 'El password debe ser de 6 caracteres').isLength({min: 6}),
        validarCampos 
    ],
    loginUser
)

router.post('/renew', validateJWT ,revalidateUser);

router.get('/',logOut)


export default router;