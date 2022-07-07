import {postRequest} from "../utils/ajax";
import {backurl} from "../config/urlConfig";

export const getCartBooks = (user_id, callback) => {
    const url = backurl + "/getCartBooks";
    postRequest(url, {"user_id":user_id}, callback);
};

export const addCartBook = (data, callback) => {
    const url = backurl + "/addCartBook";
    postRequest(url, data, callback);
};

export const deleteCartBook = (data, callback) => {
    const url = backurl + "/deleteCartBook";
    postRequest(url, data, callback);
};

export const changeCartNum = (book_id, user_id, num, callback) => {
    const url = backurl + "/changeCartNum";
    postRequest(url, {"book_id":book_id, "user_id":user_id, "num":num}, callback);
}
