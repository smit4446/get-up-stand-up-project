import {combineReducers} from 'redux';
import { ADMIN_ACTIONS } from '../actions/adminActions';

const allUser = (state = [], action) => {
    switch(action.type){
        case ADMIN_ACTIONS.SET_ALL_USER:
            console.log('In admin reducer for GET', action.payload);
            return action.payload
        default:
            return state;
    }
}

const approvedArticle = (state = [], action) => {
    switch(action.type) {
        case ADMIN_ACTIONS.SET_APPROVED_ARTICLE:
            console.log(' in admin reducer for approved articles', action.payload);
            return action.payload
        default:
            return state;
    }
}

const newArticles = (state=[], action) => {
    switch(action.type) {
    case ADMIN_ACTIONS.SET_NEW_ARTICLE:
    console.log(' in admin reducer for new articles', action.payload);
            return action.payload
        default: 
            return state;
    }
}

const modifiedArticles = (state=[], action) => {
    switch(action.type) {
    case ADMIN_ACTIONS.SET_MODIFIED_ARTICLE:
    console.log(' in admin reducer for new articles', action.payload);
            return action.payload
        default: 
            return state;
    }
}

const deleteArticle = (state=[], action) => {
  
    switch(action.type){
    case ADMIN_ACTIONS.DELETE_ARTICLE:
    console.log('in admin reducer for deleteArticle', action.payload);
      return action.payload
    }
    return state;
}

const rejectBadArticle = (state=[], action) => {
    switch(action.type){ 
    case ADMIN_ACTIONS.REJECTED_ARTICLE:
    console.log(' in admin reducer for rejectedArticle', action.payload);
      return action.payload
    }
    return state;
}
 
export default combineReducers({
    allUser, approvedArticle, newArticles, modifiedArticles, deleteArticle, rejectBadArticle, 
})