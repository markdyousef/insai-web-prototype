import {combineReducers} from 'redux';
import biostream from './biostream';
import board from './board';
import channel from './channel';
export default combineReducers({
    biostream,
    board,
    channel
});