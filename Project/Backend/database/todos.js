//const sqlite3 = require('sqlite3').verbose();
//const db = new sqlite3.Database('./todoDB/todoDb.db');

import { getDBHandler } from "./config.js";


async function createTodoDB   ({idUser, creationDate, priority, title, description, state}){
    const dbHandler = await getDBHandler();

    const newTodo= await dbHandler.run('INSERT INTO todos(idUser, creationDate, priority, title, description, state) VALUES(?,?,?,?,?,?);'
    ,[idUser, creationDate, priority, title, description, state])

    await dbHandler.close();
    
    return newTodo
}

async function readTodosDB ({idUser}){
    const dbHandler = await getDBHandler();

    const Todos= await dbHandler.all(`SELECT * FROM  todos WHERE idUser= ? ;`,[idUser]);
    await dbHandler.close();
    
    return Todos

}

async function deleteTodoDB (idTodo){
    const dbHandler = await getDBHandler();

    const response= await dbHandler.run(`DELETE FROM todos WHERE idTodos= ? ;`,[idTodo]);
    await dbHandler.close();
    
    return response

}

async function updateTodoDB ({ priority, title, description, state, idTodo, editDate}){
    const dbHandler = await getDBHandler();
    console.log('llegó')
    const response= await dbHandler.run(`UPDATE todos SET priority= ?, title= ?, description= ?, state= ? , editDate = ?  WHERE idTodos = ?;`,[priority, title, description, state,editDate, idTodo]);
    await dbHandler.close();
    
    return response

}


export {
    createTodoDB,
    readTodosDB,
    deleteTodoDB,
    updateTodoDB
}