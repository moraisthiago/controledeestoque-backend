import express from 'express'
import Item from '../models/item'

const itensRouter = express.Router()

itensRouter.post('/itens', (req, res) => {
    res.send('Cria novo item')
})

itensRouter.get('/itens', (req, res) => {
    const itens: Item[] = [
        {
            id: 1,
            nome: 'Produto 1',
            descricao: 'Descrição do produto 1'
        },
        {
            id: 2,
            nome: 'Produto 2',
            descricao: 'Descrição do produto 2'
        }
    ]
    res.json(itens)
})

itensRouter.get('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    const item: Item = {
        id: id,
        nome: `Produto ${id}`,
        descricao: `Descrição do produto ${id}`
    }
    res.json(item)
})

itensRouter.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Atualiza o item ${id}`)
})

itensRouter.delete('/itens/:id', (req, res) => {
    const id: number = +req.params.id
    res.send(`Apaga o item ${id}`)
})

export default itensRouter