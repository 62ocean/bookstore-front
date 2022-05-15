import {postRequest} from "../utils/ajax";

export const login = (user, callback) => {
    const url = "http://localhost:8080/findUser";
    postRequest(url, user, callback);
}


