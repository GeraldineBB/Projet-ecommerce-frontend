const app = {
    // propriétés

    // url de base 
    apiRootUrl: 'http://localhost:8080',

    // méthodes
    init: function () {

        console.log('coucou');

        // On appelle les composants

        productsList.init();

        brandsList.init(); 

        productsItems.init(); 



    }
};

// Une fois la création de la page html terminée
// On démarre le module App en appellant la méthode init
document.addEventListener('DOMContentLoaded', app.init);