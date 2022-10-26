import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./todoDB/todoDb.db');
sqlite3.verbose();

async function checkUserDB  (email){
    const r= await new Promise((resolve, reject) => {
        db.get(`SELECT * FROM user WHERE email= '${email}' ;`,function (error, row) {
          if (error) return reject(error);
          return resolve(row)
        });
      });
    
    return r? r : null;
}

async function createUserDB  (name, lastName, email, password){
    return await (db.run('INSERT INTO user (name, lastName, email, password) VALUES(?,?,?,?);',[name, lastName, email, password]));
}


export {
    createUserDB,
    checkUserDB
}