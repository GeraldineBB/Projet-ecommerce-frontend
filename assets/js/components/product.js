const product = {

    listProductHome: function (productName, productPrice, productDescription, productPicture) {

        // récupération du template
        const templateHomeElement = document.querySelector('#productsHome').content.cloneNode(true);

        const pictureElement = templateHomeElement.querySelector('img');
        pictureElement.src = productPicture;

        const nameElement = templateHomeElement.querySelector('h4');
        nameElement.textContent = productName;

        const priceElement = templateHomeElement.querySelector('h6');
        priceElement.textContent = productPrice + '€';

        const descriptionElement = templateHomeElement.querySelector('p');
        descriptionElement.textContent = productDescription.substring(0,50) + '...';


        const rowElement = document.querySelector("#itemHome");
        rowElement.append(templateHomeElement);


    }



}