-- no es tan similar a mysql en los tipos

CREATE TABLE user (
	idUser INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT  NOT NULL,
    lastName TEXT  NOT NULL,
    email TEXT  NOT NULL,
    password TEXT  NOT NULL
    
);

CREATE TABLE todos (
    idTodos INTEGER PRIMARY KEY AUTOINCREMENT,
    idUser INTEGER NOT NULL,
    creationDate TEXT NOT NULL,
    editDate TEXT NULL,
    priority INTEGER NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    state INTEGER NOT NULL,

    FOREIGN KEY (idUser) REFERENCES user(idUser)
);


INSERT INTO user (name, lastName, email, password)
VALUES('John','Smith','John@gmail.com', 'pass1234');

INSERT INTO todos(idUser, creationDate, priority, title, description, state) 
VALUES(1,'12/09/2022', 1, 'Pasear al perro', 'Pasear al perro por 1 hora', 1);