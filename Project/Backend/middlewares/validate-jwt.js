import  {response}  from 'express';
import jwt from 'jsonwebtoken';

const validateJWT = (req, res=response, next) =>{
    //const token = req.header('x-token');
    const token = req.cookies['token']

    if(!token){
        //'No hay token en la petición'
        return res.status(401).json({
            ok: false,
            msg: 'No token provided'
        })
    }

    try {

        const {idUser, name} = jwt.verify(
            token,
            process.env.SECRET_JWT
        );

        req.idUser = idUser;
        req.name = name;

    }catch (error){
        console.log(error)
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }

    next();
}

export  {
    validateJWT
}