import {postRequest} from "../utils/ajax";

export const login = (user, callback) => {
    const url = "http://localhost:8080/findUser";
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


