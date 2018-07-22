import { createStore } from 'redux';
import rootReducer from '../Reducers/reducerIndex';

const store = createStore(rootReducer);

export default store;