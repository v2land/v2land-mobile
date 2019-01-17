import { combineReducers, reduceReducers } from 'redux-loop';

import fallback from '../transducers/fallback.js';
import on from '../transducers/on.js';
import requestData from '../transducers/requestData.js';

import {
  getUserInfo as getUserInfoAction
} from '../actions/user.js';
import {
  login as loginAction,
  invalidateToken as invalidateTokenAction,
} from '../actions/auth.js';
import OK from '../actions/OK.js';

import { getUserInfo } from '../../service/me.js';

export default combineReducers({
  data: reduceReducers(
    on(OK(loginAction.type), (_, res) => res.client),

    on(OK(getUserInfoAction.type), (_, res) => res.client),

    on(OK(invalidateTokenAction.type), () => null),

    fallback(null),
  ),
});