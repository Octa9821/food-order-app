import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <div>
            <div className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </div>
        </div>
    );
};

export default Header;
