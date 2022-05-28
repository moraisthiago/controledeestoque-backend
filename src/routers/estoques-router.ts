import express from "express";
import Estoque from "../models/estoque";
import estoquesRepository from "../repositories/estoques-repository";

const estoquesRouter = express.Router()

estoquesRouter.post('/estoques', (req, res) => {
    const estoque: Estoque = req.body

    estoquesRepository.criar(estoque, (id) => {
        if (id) {
            res.status(201).location(`/estoques/${id}`).send()
        } else {
            res.status(400).send()
        }
    })
})

estoquesRouter.get('/estoques', (req, res) => {
    estoquesRepository.lerTodos((estoques) => res.json(estoques))
})

estoquesRouter.get('/estoques/:id', (req, res) => {
    const id: number = +req.params.id

    estoquesRepository.ler(id, (item) => {
        if (item) {
            res.json(item)
        } else {
            res.status(404).send()
        }
    })
})

estoquesRouter.put('/estoques/:id', (req, res) => {
    const id: number = +req.params.id

    estoquesRepository.atualizar(id, req.body, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

estoquesRouter.delete('/estoques/:id', (req, res) => {
    const id: number = +req.params.id
    estoquesRepository.apagar(id, (notFound) => {
        if (notFound) {
            res.status(404).send()
        } else {
            res.status(204).send()
        }
    })
})

export default estoquesRouter