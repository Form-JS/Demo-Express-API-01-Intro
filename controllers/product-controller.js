const productController = {

    // Récuperation d'un element
    getById: (req, res) => {
        res.sendStatus(501);
    },

    // Récuperation de la liste des elements
    // Best pratice: Ajouter un mecanisme de paging
    getAll: (req, res) => {
        res.sendStatus(501);
    },

    // Récuperation des elements via leur nom
    getByName: (req, res) => {
        res.sendStatus(501);
    },

    // Ajouter un produit
    add: (req, res) => {
        res.sendStatus(501);
    },

    // Mise à jours d'un produit
    update: (req, res) => {
        res.sendStatus(501);
    },

    // Suppression d'un produit
    delete: (req, res) => {
        res.sendStatus(501);
    }

};

module.exports = productController;