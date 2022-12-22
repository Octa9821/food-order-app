import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const mealItem = {
        name: props.name,
        description: props.description,
        price: props.price,
    };

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <MealItemForm
                mealItem={mealItem}
                onAddToCart={addToCartHandler}
            ></MealItemForm>
        </li>
    );
};

export default MealItem;
