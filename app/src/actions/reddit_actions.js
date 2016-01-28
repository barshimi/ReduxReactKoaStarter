/**
 *  reddit actions
 */
import { APIgetCall, APIpostCall } from './../utils/api';
import jwt from 'jwt-simple';
import { jwtPrefix, ENV } from './../utils/constants';

// API actions
export const FETCH_REDDIT_LIST = 'FETCH_MENU_STRUCTURE';


export const RedditCreators = {
    FetchRedditList : (queryStr) => dispatch => {
       fetch(APIgetCall(ENV + "/admin/main?q=" + queryStr))
        .then(res => {
            if(res.status !== 200) return console.log(res.status);
            return res.json();

        })
        .then(res => {
            let redditList = [].concat(jwt.decode(res.list, jwtPrefix));
            return dispatch({
                       type : FETCH_REDDIT_LIST,
                       payload : redditList
                   })
        })
        .catch(err => {
            console.log(err);
        })
    }
}
