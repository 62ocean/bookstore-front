import {postRequest} from "../utils/ajax";

export const getBooks = (callback) => {
    const url = "/getbooks";
    postRequest(url, null, callback);
};

export const getBook = (id, callback) => {
    const url = "/getbook?id="+id;
    postRequest(url, null, callback);
};

export const updateBook = (data, callback) => {
    const url = "/updatebook";
    postRequest(url, data, callback);
}

export const deleteBook = (id, callback) => {
    const url = "/deletebook";
    postRequest(url, {"id":id}, callback);
};

export const bookStatistics = (date1, date2, callback) => {
    const url = "/bookStatistics";
    postRequest(url, {"date1":date1,"date2":date2}, callback);
}

