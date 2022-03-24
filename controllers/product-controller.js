// Utilisation de data "Mockup" pour simuler un acces DB
const data = require('../data/products.json');

const productController = {

    // Récuperation de la liste des elements
    // Best pratice: Ajouter un mecanisme de paging
    getAll: (req, res) => {
        // Récuperation des données
        const products = data.products;

        // Envoi de la réponse sous format json
        // - Définition du header et données "stringify" (Node)
        /*
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
        */

        // - Gestion de format de réponse (Permet de gérer le json et l'xml)
        /*
        res.format({
            'application/json': () => {
                res.send(JSON.stringify(products));
            }
        });
        */

        // - Utilisation de la méthode ".json" de express
        res.json(products);
    },

    // Récuperation d'un element
    getById: (req, res) => {
        // Récuperation du parametre Id contenu dans l'url
        const id = parseInt(req.params.id);

        // Récuperation des données
        const product = data.products.find(p => p.id === id);

        // Test si on obtenu l'element
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json(product);
    },

    // Récuperation des elements via leur nom
    getByName: (req, res) => {
        res.sendStatus(501);
    },

    // Ajouter un produit
    add: (req, res) => {
        // Récuperation des données à ajouter
        const newProduct = req.body;

        // Ajout de l'element dans la liste (Cas Réel -> Utilisation de la DB)
        const newId = ++data.lastId;
        data.products.push({
            id: newId,
            ...newProduct
        });

        // Envoi d'un réponse
        res.json({
            message: `Product added with id ${newId}`
        });
    },

    // Mise à jours d'un produit
    update: (req, res) => {
        // Récuperation des données à mettre à jours
        const id = parseInt(req.params.id);
        const upateProduct = req.body;

        // Récuperation de l'element à mettre à jours 
        const indexTarget = data.products.findIndex(p => p.id === id);

        // Teste si l'element existe
        if (indexTarget === -1) {
            return res.status(404).json({
                message: `Le produit ${id} n'existe pas :o`
            });
        }

        // Mise à jours des données (Cas Réel -> Utilisation de la DB)
        data.products[indexTarget] = {
            id, ...upateProduct
        };

        // Envoi d'un réponse
        res.sendStatus(204);
    },

    // Suppression d'un produit
    delete: (req, res) => {
        // Récuperation du parametre Id contenu dans l'url
        const id = parseInt(req.params.id);

        // Verification que l'élément existe
        const indexTarget = data.products.findIndex(p => p.id === id);

        if (indexTarget === -1) {
            return res.status(404).json({
                message: `Le produit ${id} n'existe pas :o`
            });
        }

        // Suppression de l'element (Cas Réel -> Utilisation de la DB)
        data.products.splice(indexTarget, 1);

        // ↓ Alternative pour le delete dans une liste d'objet JS
        // data.products = data.products.filter(p => p.id !== id);

        // Envoi d'un réponse
        return res.status(200).json({
            message: `Le produit ${id} a été supprimé avec succes`
        });
    }

};

module.exports = productController;