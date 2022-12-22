import { useState } from 'react';
import Input from '../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const [amount, setAmount] = useState(1);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
        console.log('Amount is: ' + amount);
    };

    return (
        <div>
            <Input
                label="Amount"
                input={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            ></Input>
            <form className={styles.form}>
                <button type="submit">+ Add</button>
            </form>
        </div>
    );
};

export default MealItemForm;
