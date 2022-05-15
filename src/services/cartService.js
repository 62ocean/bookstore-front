import {postRequest} from "../utils/ajax";

export const getCartBooks = (user_id, callback) => {
    const url = "http://localhost:8080/getCartBooks";
    postRequest(url, {"user_id":user_id}, callback);
};

export const addCartBook = (data, callback) => {
    const url = "http://localhost:8080/addCartBook";
    postRequest(url, data, callback);
};

export const deleteCartBook = (data, callback) => {
    const url = "http://localhost:8080/deleteCartBook";
    postRequest(url, data, callback);
};
