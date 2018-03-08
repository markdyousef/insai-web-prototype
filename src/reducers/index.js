import {combineReducers} from 'redux';
import biostream from './biostream';
import board from './board';
export default combineReducers({
    biostream,
    board
});