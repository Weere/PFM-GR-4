import User from "../../models/user";
import {
  AUTHENTICATE,
  LOGOUT,
  CREATE_USER,
  UPDATE_USER,
} from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  availableUsers: [],
  userInformation: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        token: action.token,
        userId: action.userId,
      };

    case LOGOUT:
      return initialState;
    // case SIGNUP:
    //   return {
    //     token: action.token,
    //     userId: action.userId,
    //   };

    case CREATE_USER:
      const newUser = new User(
        action.userData.id,
        action.userData.userName,
        action.userData.telNo,
        action.userData.date,
        action.userData.income,
        action.userData.occupation,
        action.userData.ownerId
      );
      return {
        ...state,
        availableUsers: state.availableUsers.concat(newUser),
        userInformation: state.userInformation.concat(newUser),
      };

    case UPDATE_USER:
      const userIndex = state.userInformation.findIndex(
        (userInfo) => userInfo.ownerId === action.ownerId
      );
      const updateduser = new User(
        action.ownerId,
        state.userInformation[userIndex].ownerId,
        action.userData.userName,
        action.userData.telNo,
        action.userData.date,
        action.userData.income,
        action.userData.occupation
      );
      const updatedUserInformation = [...state.userInformation];
      updatedUserInformation[userIndex] = updateduser;
      const availableUserIndex = state.availableUsers.findIndex(
        (userInfo) => userInfo.ownerId === action.ownerId
      );
      const updatedAvailableUsers = [...state.availableUsers];
      updatedAvailableUsers[availableUserIndex] = updateduser;
      return {
        ...state,
        availableUsers: updatedAvailableUsers,
        userInformation: updatedUserInformation,
      };

    default:
      return state;
  }
};
