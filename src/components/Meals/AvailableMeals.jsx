import styles from './AvailableMeals.module.css';
import MealItem from './MealItem';
import Card from '../UI/Card/Card.jsx';

const AvailableMeals = (props) => {
    return (
        <div className={styles.meals}>
            <Card>
                <ul className={styles.ul}>
                    {props.meals.map((item) => (
                        <div>
                            <MealItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            ></MealItem>
                        </div>
                    ))}
                </ul>
            </Card>
        </div>
    );
};

export default AvailableMeals;
