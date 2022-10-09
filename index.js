import {store} from './store';
import App from './App'
import {Provider} from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            <Provider store={store}>
                <App />
            </Provider>
);



// ReactDOM.render(
//         <Provider store={store}>
//             <App />
//         </Provider>
//     document.getElementById('root'),
// )