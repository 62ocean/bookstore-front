import {postRequest} from "../utils/ajax";

export const login = (user, callback) => {
    const url =  "/login";
    postRequest(url, user, callback);
}
export const register = (user, callback) => {
    const url =  "/register";
    postRequest(url, user, callback);
}

export const getAllUsers = (callback) => {
    const url =  "/getAllUsers";
    postRequest(url, null, callback);
}

export const changeUserStatus = (userId, callback) => {
    const url =  "/changeUserStatus";
    postRequest(url, {"userId":userId}, callback);
}

export const userStatistics = (date1, date2, callback) => {
    const url =  "/userStatistics";
    postRequest(url, {"date1":date1,"date2":date2}, callback);
}

export const userBookStatistics = (userId, date1, date2, callback) => {
    const url =  "/userBookStatistics";
    postRequest(url, {"userId":userId,"date1":date1,"date2":date2}, callback);
}


