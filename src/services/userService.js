import {postRequest} from "../utils/ajax";
import {callback} from "chart.js/helpers";

export const login = (user, callback) => {
    const url = "http://localhost:8080/findUser";
    postRequest(url, user, callback);
}
export const register = (user, callback) => {
    const url = "http://localhost:8080/register";
    postRequest(url, user, callback);
}

export const getAllUsers = (callback) => {
    const url = "http://localhost:8080/getAllUsers";
    postRequest(url, null, callback);
}

export const changeUserStatus = (userId, callback) => {
    const url = "http://localhost:8080/changeUserStatus";
    postRequest(url, {"userId":userId}, callback);
}

export const userStatistics = (date1, date2, callback) => {
    const url = "http://localhost:8080/userStatistics";
    postRequest(url, {"date1":date1,"date2":date2}, callback);
}

export const userBookStatistics = (userId, date1, date2, callback) => {
    const url = "http://localhost:8080/userBookStatistics";
    postRequest(url, {"userId":userId,"date1":date1,"date2":date2}, callback);
}


