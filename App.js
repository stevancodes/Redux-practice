import { useDispatch, useSelector } from 'react-redux';

import {counterSelect, counterIncrement} from './slice'


function App(){
    const counterSelect = useSelector(counterSelect);
    const dispatch = useDispatch()

    return (
        <div>
            <h1>{counterSelect}</h1>
            <input type="number" onChange={({target})=> dispatch(counterIncrement(target.value))}></input>
        </div>
    )
}

export default App