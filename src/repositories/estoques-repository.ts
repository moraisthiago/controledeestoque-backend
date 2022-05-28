import Estoque from "../models/estoque";
import database from "./database";

const estoquesRepository = {
    criar: (estoque: Estoque, callback: (id?: number) => void) => {
        const sql = 'INSERT INTO estoques (nome, descricao) VALUES (?, ?)'
        const params = [estoque.nome, estoque.descricao]
        database.run(sql, params, function(_err) {
            callback(this?.lastID)
        })
    },
    lerTodos: (callback: (estoques: Estoque[]) => void) => {
        const sql = 'SELECT * FROM estoques'
        const params: any[] = []
        database.all(sql, params, (_err, rows) => callback(rows))
    },
    ler: (id: number, callback: (estoque?: Estoque) => void) => {
        const sql = 'SELECT * FROM estoques WHERE id = ?'
        const params = [id]
        database.get(sql, params, (_err, row) => callback(row))
    },
    atualizar: (id: number, estoque: Estoque, callback: (notFound: boolean) => void) => {
        const sql = 'UPDATE estoques SET nome = ?, descricao = ? WHERE id = ?'
        const params = [estoque.nome, estoque.descricao, id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
    apagar: (id: number, callback: (notFound: boolean) => void) => {
        const sql = 'DELETE FROM estoques WHERE id = ?'
        const params = [id]
        database.run(sql, params, function(_err) {
            callback(this.changes === 0)
        })
    },
}

export default estoquesRepository