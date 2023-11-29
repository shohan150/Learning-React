import React, { useEffect, useState } from 'react';
//to store and retrieve cart data
import { addToDb, getStoredCart } from '../../utilities/fakedb';
//Cart component used with cart state
import Cart from '../Cart/Cart';
//Product component used with products state
import Product from '../Product/Product';
import './Shop.css';

//ekhane ektu kechal ache. 
//Kono product er add to cart button e click korle, first e cart e calculation dekhabe/entry nibe. Tarpor local storage e add hobe. Mane button click korle ekta function er moddhome cart e add + ctorage update hocche na. Refresh deyar somoy, useEffect diye deta jemon fetch kora hoi, sevabe e loca storage theke data niye cart update kore fele. R 2nd useEffect e extra feature ache. main products data(products.json) kokhono change hle, cart k abar load korbe ebong chack korbe j data gulo age chilo, sob gulor id thik ache kina, thakle abar quantity entry niye, notun kore cart k update korbe. 
//React jehetu virtual DOM create kore rakhe, tai kono value change hle oi component er actual DOM r virtual DOM compare kore oi particular component ta update kore. Ekhane Cart component e cart state k prp hisebe deya hoyeche. tai cart state update hle e, er sathe related component (Cart) update hoye jabe. 
//N.B: 2 ta state declare kore hoyeche. 2 tai 2 ta component e pathano hoyeche. Ebar bujhteso state keno use kora hoi? Jate ei state e kono change ba update hle, related component tai update hoi.

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])


    //decalred here to establish communication between the two components as react is uni-directional. This const has no operation here, it is triggerd indes the Product component.

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            exists.quantity++;
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;