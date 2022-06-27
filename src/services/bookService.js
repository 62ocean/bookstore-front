import {postRequest} from "../utils/ajax";

export const getBooks = (callback) => {
    const url = "http://localhost:8080/getbooks";
    postRequest(url, null, callback);
};

export const getBook = (id, callback) => {
    const url = "http://localhost:8080/getbook?id="+id;
    postRequest(url, null, callback);
};

export const updateBook = (data, callback) => {
    const url = "http://localhost:8080/updatebook";
    postRequest(url, data, callback);
}

export const deleteBook = (id, callback) => {
    const url = "http://localhost:8080/deletebook";
    postRequest(url, {"id":id}, callback);
};

export const bookStatistics = (date1, date2, callback) => {
    const url = "http://localhost:8080/bookStatistics";
    postRequest(url, {"date1":date1,"date2":date2}, callback);
}
