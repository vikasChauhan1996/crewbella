import axios from "axios";
export const USERS_PROFILE = 'USERS_PROFILE';

export const userDetails = ()=>{
    return async (dispatch)=>{
        const res = await axios({
            method:"GET",
            url:"https://py.crewbella.com/user/api/profile/chiragbalani"
        })
        dispatch({type:USERS_PROFILE,payload:res.data })
    }
};

