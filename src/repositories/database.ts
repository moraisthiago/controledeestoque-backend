import sqlite3 from 'sqlite3'

const DBSOURCE = 'db.sqlite'

const SQL_ESTOQUES_CREATE = `
    CREATE TABLE estoques (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT
    )`

const SQL_PRODUTOS_CREATE = `
    CREATE TABLE produtos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        descricao TEXT,
        preco REAL,
        quantidade INTEGER
    )`

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message)
        throw err
    } else {
        console.log('Base de dados conectada com sucesso.')
        database.run(SQL_ESTOQUES_CREATE, (err) => {
            if (err) {
                // Possivelmente a tabela já foi criada
            } else {
                console.log('Tabela estoques criada com sucesso.')
            }
        })
    }
})

export default database
