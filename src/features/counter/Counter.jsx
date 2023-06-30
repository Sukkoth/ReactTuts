import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decremenet,
    reset,
    incrementByAmount,
} from './counterSlice';
import './counter.css';
import { useState } from 'react';
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    };
    return (
        <section className='section'>
            <p>{count}</p>
            <div className='buttons'>
                <button onClick={() => dispatch(decremenet())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <input
                type='text'
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <div className='buttons'>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    Add Amount
                </button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    );
};

export default Counter;
