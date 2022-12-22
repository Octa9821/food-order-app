import Header from './components/Layout/Header';
import imgStyles from './components/Layout/Header.module.css';
import img from './resources/images/meals.jpg';
import mealsList from './resources/mealsList';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
    return (
        <>
            <Cart />
            <Header></Header>
            <div className={imgStyles['main-image']}>
                <img src={img} alt="Meals Header" />
            </div>
            <main>
                <Meals meals={mealsList}></Meals>
            </main>
        </>
    );
}

export default App;
