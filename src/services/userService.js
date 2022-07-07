import {postRequest} from "../utils/ajax";
import {callback} from "chart.js/helpers";
import {backurl} from "../config/urlConfig";

export const login = (user, callback) => {
    const url = backurl + "/findUser";
    postRequest(url, user, callback);
}
export const register = (user, callback) => {
    const url = backurl + "/register";
    postRequest(url, user, callback);
}

export const getAllUsers = (callback) => {
    const url = backurl + "/getAllUsers";
    postRequest(url, null, callback);
}

export const changeUserStatus = (userId, callback) => {
    const url = backurl + "/changeUserStatus";
    postRequest(url, {"userId":userId}, callback);
}

export const userStatistics = (date1, date2, callback) => {
    const url = backurl + "/userStatistics";
    postRequest(url, {"date1":date1,"date2":date2}, callback);
}

export const userBookStatistics = (userId, date1, date2, callback) => {
    const url = backurl + "/userBookStatistics";
    postRequest(url, {"userId":userId,"date1":date1,"date2":date2}, callback);
}


