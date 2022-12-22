import HeaderCartButton from './HeaderCartButton';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton></HeaderCartButton>
            </div>
        </div>
    );
};

export default Header;
