import {postRequest} from "../utils/ajax";

export const getCartBooks = (user_id, callback) => {
    const url =  "/getCartBooks";
    postRequest(url, {"user_id":user_id}, callback);
};

export const addCartBook = (data, callback) => {
    const url =  "/addCartBook";
    postRequest(url, data, callback);
};

export const deleteCartBook = (data, callback) => {
    const url =  "/deleteCartBook";
    postRequest(url, data, callback);
};

export const changeCartNum = (book_id, user_id, num, callback) => {
    const url =  "/changeCartNum";
    postRequest(url, {"book_id":book_id, "user_id":user_id, "num":num}, callback);
}
