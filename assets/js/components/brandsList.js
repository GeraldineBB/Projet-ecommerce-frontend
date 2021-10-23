const brandsList = {

    init: function () {

        brandsList.loadBrandsForMenuFromAPI();

        const subMenuElement = document.querySelector(".menuNav--button_brand");

        // console.log(subMenuElement); 

        subMenuElement.addEventListener ("click", brandsList.loadBrandsForMenuFromAPI); 

    },

    loadBrandsForMenuFromAPI: function () {

        // On déclenche la requête HTTP (via le moteur sous-jacent Ajax)
        fetch(app.apiRootUrl + '/brands')
            // Ensuite, lorsqu'on reçoit la réponse au format JSON
            .then(function (response) {
                // On convertit cette réponse en un objet JS et on le retourne
                return response.json();
            })
            // Ce résultat au format JS est récupéré en argument ici-même
            .then(function (data) {

                console.log(data);

                for (const brandsData of data) {

                    console.log(brandsData.name); 
                    brandsList.showSubMenu(brandsData.name);

                }

            });

    },

    // faire une fonction pour créer les li avec en content = brandName
    createSubTitle: function(brandName){




    }, 

    // faire une fonction qui affiche le sous menu quand on clique sur le menu
    showSubMenu: function(brandName) {

        // récupération du template
        const templateMenuElement = document.querySelector("#menuNav--submMenuBrand");

        // console.log(templateMenuElement);

        // je vais créer une li pour chaque marque
        const liElement = document.createElement('li'); 
        liElement.textContent = brandName;

        console.log(liElement);

        const ulElement = templateMenuElement.querySelector('ul');

        ulElement.appendChild(liElement);

        // console.log(subMenuTitle);

        const menuElement = document.querySelector(".menuNav--button_brand");

        menuElement.append(templateMenuElement); 


    }


}