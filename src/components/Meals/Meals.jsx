import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

const Meals = (props) => {
    return (
        <div>
            <MealsSummary></MealsSummary>
            <AvailableMeals meals={props.meals}></AvailableMeals>
        </div>
    );
};

export default Meals;
