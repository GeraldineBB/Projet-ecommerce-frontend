const productsList = {

    init: function () {
        // productsList.bindAllProductsEvents();
        productsList.loadProductsFromAPI();
    },

    loadProductsFromAPI: function () {

        // On prépare la configuration de la requête HTTP
        let config = {
            // Methodes HTTP
            // GET : pour récupérer des données
            // POST : pour créer de nouvelles ressources
            // PUT : pour effectuer des mises à jour de toutes les propriétés d'un éléments
            // PATCH : pour effectuer des mises à jour partielles. Ex : patch d'un jeu (Merci Dimitri)
            // DELETE : pour supprimer une ressource
            method: 'GET', // On récupère du contenu, donc GET
            mode: 'no-cors',
            cache: 'no-cache',

        };

        // On déclenche la requête HTTP (via le moteur sous-jacent Ajax)
        fetch(app.apiRootUrl + '/', config)
            // Ensuite, lorsqu'on reçoit la réponse au format JSON
            .then(function (response) {
                // On convertit cette réponse en un objet JS et on le retourne
                return response.json();
                console.log('test'); 
            })
            // Ce résultat au format JS est récupéré en argument ici-même
            .then(function (data) {

                console.log(data); 

                // // pour chaque donnée de l'api on va créer un nouvel élément .product
                // for (const ProductData of data) {

                //     // on créee le produit avec les valeurs qu'on obtient dans notre objet json
                //     // product.createNewProduct(ProductData.title);
                //     console.log('kikouuuu'); 

                // }
            });

    }

}