import styles from './HeaderCartButton.module.css';
import CartIcon from '@mui/icons-material/ShoppingCart';

const HeaderCartButton = (props) => {
    return (
        <button className={styles.button}>
            <span>
                <CartIcon className={styles.icon}></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>0</span>
        </button>
    );
};

export default HeaderCartButton;
