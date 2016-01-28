/**
 *  Reddit Reducer
 */
import { createReducer } from 'utils';
import {
  FETCH_REDDIT_LIST
} from './../actions/reddit_actions';

const InitialState = {
   redditList : []
}

export const RedditList = createReducer(InitialState.redditList, {
    [FETCH_REDDIT_LIST] : (state, action) => action
});
