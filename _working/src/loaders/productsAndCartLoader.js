import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
   const productsData = await fetch('products.json');
   const products = await productsData.json();
   //same kaj fetch.then.then diyeo kora jai. ekhane onno format use korlo emnitei. no special reason.
   // console.log(productsData);
   // console.log(products);

   //get cart
   const savedCart = getStoredCart();
   // console.log(savedCart);
   const initialCart = [];

   for (const id in savedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
         const quantity = savedCart[id];
         addedProduct.quantity = quantity;
         initialCart.push(addedProduct);
      }
   }
   return { products, initialCart };
   // return { products: products, initialCart:initialCart }; duitar kaj same.
};

//in Shop.js when useLoaderData is used the data is received after appling .json(). So, no need to perform .json() seperately. But here, useLoaderData is not used. That's why thata received data is to be converted to json format using .json().

//.json() is used to extract the JSON content from the response obtained from the API.It parses the response body as JSON and returns a JavaScript object representing the parsed JSON content.

//      fetch('https://api.example.com/data')
//        .then(response => response.json())
//        .then(data => console.log(data))
//        .catch(error => console.error('Error:', error));
//      ```

