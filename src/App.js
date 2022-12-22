import Header from './components/Layout/Header';
import imgStyles from './components/Layout/Header.module.css';
import img from './resources/images/meals.jpg';
import mealsList from './resources/mealsList';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler}></Header>
            <div className={imgStyles['main-image']}>
                <img src={img} alt="Meals Header" />
            </div>
            <main>
                <Meals meals={mealsList}></Meals>
            </main>
        </CartProvider>
    );
}

export default App;
