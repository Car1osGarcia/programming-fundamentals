import  moment  from 'moment';
import { createTodoDB, deleteTodoDB, readTodosDB, updateTodoDB } from "../database/todos.js";
import jwt  from 'jsonwebtoken';


const createTodo = async(req, res) =>{
    const token = req.cookies['token']
    let now = moment();
    const fecha =now.format('DD/MM/YYYY HH:mm') //moment(now,'DD/MM/YYYY HH:mm');
    console.log(fecha);

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token didnt find'
        })
    }

    const idUser = jwt.decode(token).idUser;
    
    const newTodo ={
        ...req.body,
        state: 0,
        idUser,
        creationDate:fecha
    }

    try{
        const r= await createTodoDB(newTodo);
        console.log('respuesta');
        console.log(r);
        newTodo.idTodos=r.lastID
        res.status(201).json({
            ok: true,
            msg: 'todo created succesfully',
            newTodo
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear evento'
            //msg:error.sqlMessage
        });
    }
}

const readTodos = async(req, res) =>{

    const token = req.cookies['token']

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Token didnt find'
        })
    }

    const idUser = jwt.decode(token).idUser;
    
    try{
        const response=await readTodosDB({idUser});
        console.log(response)
        
        res.status(201).json({
            ok: true,
            msg: 'Todos sended',
            todos: response
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error reading todos'
            //msg:error.sqlMessage
        });
    }
}

const updateTodo = async(req, res) =>{
    const idTodo= req.params.id;
    let now = moment();
    const date =now.format('DD/MM/YYYY HH:mm')

    const newTodo ={
        ...req.body,
        idTodo,
        editDate:date
    }

    try{
        let r=await updateTodoDB(newTodo);

        console.log(r);
        
        if(r.changes===0){
            return res.status(400).json({
                ok: false,
                msg: 'Todo doesn´t exist'
            });
        }

        res.status(201).json({
            ok: true,
            msg: 'Todo updated'
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error to update the todo'
            //msg:error.sqlMessage
        });
    }
}

const deleteTodo = async(req, res) =>{
    const idTodo= req.params.id;

    try{
        let r=await deleteTodoDB(idTodo);
        console.log(r)
        
        if(r.changes===0){
            return res.status(400).json({
                ok: false,
                msg: 'Todo doesn´t exist'
            });
        }

        res.status(201).json({
            ok: true,
            msg: 'Todo deleted correctly',
            idTodo:idTodo
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error to delete todo'
            //msg:error.sqlMessage
        });
    }
}




export {
    createTodo,
    readTodos,
    updateTodo,
    deleteTodo
 }