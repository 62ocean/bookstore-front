import {postRequest} from "../utils/ajax";

export const getBooks = (callback) => {
    const url = "http://localhost:8080/getbooks";
    postRequest(url, null, callback);
};

export const getBook = (id, callback) => {
    const url = "http://localhost:8080/getbook?id="+id;
    postRequest(url, null, callback);
};
