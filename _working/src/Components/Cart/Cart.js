import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //here 'children' prop is the button passed inside the <Cart> element. Means everything inside an element is the children of that element. More explanation below.
    const { cart, clearCart, children } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;


// When you pass JSX elements as children to a component, React automatically populates the `children` prop with those elements.

// Consider the following example:

// // ParentComponent.js

// const ParentComponent = ({ children }) => {
//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {children}
//     </div>
//   );
// };

// export default ParentComponent;

// // App.js
// import ParentComponent from './ParentComponent';

// const App = () => {
//   return (
//     <div>
//       <ParentComponent>
//         <p>This is a child paragraph.</p>
//         <button>Click me</button>
//       </ParentComponent>
//     </div>
//   );
// };

// export default App;
// ```

// In this example, the `ParentComponent` receives JSX elements (`<p>` and `<button>`) as children. When you use `{children}` within the `ParentComponent`, it automatically renders the children passed to it. So, even if you don't explicitly assign the `children` prop in the component's destructuring, it is automatically populated by React based on the content between the opening and closing tags of the component.