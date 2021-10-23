const productsList = {

    init: function () {
        // productsList.bindAllProductsEvents();
        productsList.loadProductsForHomeFromAPI();
        // productsList.loadProductsForPageFromAPI(); 


    },

    loadProductsForHomeFromAPI: function () {

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

                for (const productData of data) {

                    product.listProductHome(productData.name, productData.price, productData.description, productData.picture);

                }

            });

    },


}