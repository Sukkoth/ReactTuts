import { useSelector, useDispatch } from 'react-redux';
import { increment, decremenet } from './counterSlice';
import './counter.css';
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <section className='section'>
            <p>{count}</p>
            <div className='buttons'>
                <button onClick={() => dispatch(decremenet())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </section>
    );
};

export default Counter;
