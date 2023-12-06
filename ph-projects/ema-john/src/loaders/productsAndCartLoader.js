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

//first state, products e sudhu data fetch kore e dekhano jai. karon oi data use kore kothao show e kora hocche na. tai .json() apply kore json e convert kora lage na. vitore vitore stirng data er sathe comparison kore, calculation kore fele. kintu cart e to data show korte hobe. r data show korar jonno protita data k aladavabde access korte hobe. tai .json() apply kore data access korte hoi!(still my concept is not clear about this).

//`JSON.stringify()` is used to convert a JavaScript object to a JSON string, `JSON.parse()` is used to parse a JSON string into a JavaScript object, and `.json()` is used in the Fetch API to extract JSON content from a response.

//.json() is used to extract the JSON content from the response obtained from the API.It parses the response body as JSON and returns a JavaScript object representing the parsed JSON content.

//      fetch('https://api.example.com/data')
//        .then(response => response.json())
//        .then(data => console.log(data))
//        .catch(error => console.error('Error:', error));
//      ```

