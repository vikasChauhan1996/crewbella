import axios from "axios";
export const USERS_PROFILE = "USERS_PROFILE";

export const userDetails = (user) => {
  return async (dispatch) => {
    const res = await axios({
      method: "GET",
      url: `https://py.crewbella.com/user/api/profile/${user}`,
    });
    dispatch({ type: USERS_PROFILE, payload: res.data });
  };
};
