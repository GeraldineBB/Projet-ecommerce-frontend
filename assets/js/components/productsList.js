const productsList = {

    init: function () {
        // productsList.bindAllProductsEvents();
        productsList.loadProductsFromAPI();
    },

    loadProductsFromAPI: function () {

        // // On prépare la configuration de la requête HTTP
        // let config = {
        //     // Methodes HTTP
        //     // GET : pour récupérer des données
        //     // POST : pour créer de nouvelles ressources
        //     // PUT : pour effectuer des mises à jour de toutes les propriétés d'un éléments
        //     // PATCH : pour effectuer des mises à jour partielles. Ex : patch d'un jeu (Merci Dimitri)
        //     // DELETE : pour supprimer une ressource
        //     method: 'GET', // On récupère du contenu, donc GET
        //     mode: 'cors',
        //     cache: 'no-cache',

        // };

        // On déclenche la requête HTTP (via le moteur sous-jacent Ajax)
        fetch(app.apiRootUrl + '/')
            // Ensuite, lorsqu'on reçoit la réponse au format JSON
            .then(function (response) {
                // On convertit cette réponse en un objet JS et on le retourne
                return response.json();
            })
            // Ce résultat au format JS est récupéré en argument ici-même
            .then(function (data) {

                console.log(data); 


            });

    }

}