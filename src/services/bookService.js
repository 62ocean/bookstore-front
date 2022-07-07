import {postRequest} from "../utils/ajax";
import {backurl} from "../config/urlConfig";

export const getBooks = (callback) => {
    const url = backurl + "/getbooks";
    postRequest(url, null, callback);
};

export const getBook = (id, callback) => {
    const url = backurl + "/getbook?id="+id;
    postRequest(url, null, callback);
};

export const updateBook = (data, callback) => {
    const url = backurl + "/updatebook";
    postRequest(url, data, callback);
}

export const deleteBook = (id, callback) => {
    const url = backurl + "/deletebook";
    postRequest(url, {"id":id}, callback);
};

export const bookStatistics = (date1, date2, callback) => {
    const url = backurl + "/bookStatistics";
    postRequest(url, {"date1":date1,"date2":date2}, callback);
}

