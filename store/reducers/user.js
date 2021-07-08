import USERS from '../../data/Users';
import User from '../../models/user';
import {CREATE_USER} from '../actions/user';

const initialState = {
    availableUsers: USERS, 
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            const newUser = new User(
                new Date().toString(), 
                action.userData.userName, 
                action.userData.telNo, 
                action.userData.email, 
                action.userData.income, 
                action.userData.password  
            );  
            return {
                ...state, 
                availableUsers: state.availableUsers.concat(newUser)
            };
            break;
    
        default:
            break;
    }
    return state;
};