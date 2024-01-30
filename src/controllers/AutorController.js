import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {            
            const listarAutor = await autor.find({});
            res.status(200).json(listarAutor);
        } catch (erro) {
            res.status(500).json({ message: `${erro} - Falha ao listar Autores`});
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: 'Criado com sucesso', autor: novoAutor });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar Autor` });
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (erro) {
            res.status(500).json({ message: `${erro} - Falha ao buscar Autor`});
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Autor atualizado'});
        } catch (erro) {
            res.status(500).json({ message: `${erro} - Falha ao atualizar Autor`});
        }
    }

    static async deletarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor deletado com sucesso' });
        } catch (erro) {
            res.status(500).json({ message: `${erro} - Falha ao deletar Autor` });
        }
    }



}

export default AutorController