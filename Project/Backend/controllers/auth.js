import bcrypt from 'bcryptjs';
import {generarJWT} from '../helpers/jwt.js'
import {createUserDB, checkUserDB} from '../database/auth.js';
import {tokenToCookie} from '../helpers/tokenToCookie.js';



const createUser = async (req,res)=>{
    let {name, lastName, email, password}= req.body;

    try{
        let r = await checkUserDB(email)
        if(r != null){
            res.status(400).json({
                ok: false,
                msg: 'The user exists already'
            })
        } 

        const salt = bcrypt.genSaltSync();
        password= bcrypt.hashSync(password, salt);

        r = await createUserDB(name, lastName, email, password);

        return loginUser(req,res);

        // const token = await generarJWT(r.idUser, r.name)
        // console.log('si se generó token: '+token)
        // return tokenToCookie(token,r.name, 200, res);

        // res.status(201).json({
        //     ok: true,
        //     name: name
        // });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
            //msg:error.sqlMessage
        });
    }   
}

const loginUser = async(req,res)=>{
    const{ email, password}= req.body;
    console.log('si detecta'+email+password);
    try{
        let r = await checkUserDB(email)
        if(r == null){
            res.status(400).json({
                ok: false,
                msg: 'The user doesn´t exists'
            })
        }

        const validPassword = bcrypt.compareSync(password, r.password);

        if(!validPassword){
            return res.status(401).json({
                ok: false,
                msg: 'Incorrect password'
            })
        }

        //generar el JWT
        const token = await generarJWT(r.idUser, r.name)
        console.log('si se generó token: '+token)
        return tokenToCookie(token,r.name, 200, res);
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
            //msg:error.sqlMessage
        });
    }
}

const revalidateUser = async(req, res) =>{

    const {idUser, name} = req;

    try{
                //generar el JWT
        const token = await generarJWT(idUser, name)
        console.log('genero nuevo');
        // res.status(201).json({
        //     ok: true,
        //     name: name,
        //     token
        // });
        return tokenToCookie(token, name, 200, res);

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Contact the administrator'
            //msg:error.sqlMessage
        });
    }

}

const logOut = async(req, res) =>{
    res
    .status(200)
    .clearCookie('token')
    .json({ ok: true, msg:'You have logged out'});
}


 export {
    createUser,
    loginUser,
    revalidateUser,
    logOut
 }