import { USERS_PROFILE } from "./Action";

const DetailsOfUsers = {
  details: {},
};

export const userProfileDetails = (state = DetailsOfUsers, action) => {
  switch (action.type) {
    case USERS_PROFILE:
      return {
        ...state,
        details: action.payload,
      };

      break;

    default:
      return state;
  }
};
