import {postRequest} from "../utils/ajax";
import {backurl} from "../config/urlConfig";

export const submitOrder = (data, callback) => {
    const url = backurl + "/receiveOrders";
    postRequest(url, data, callback);
};

export const getOrders = (user_id, callback) => {
    const url = backurl + "/getOrders";
    postRequest(url, {"user_id":user_id}, callback);
};

// export const getOrderItems = (order_id, callback) => {
//     const url = "http://localhost:8080/getOrderItems";
//     postRequest(url, {"order_id":order_id}, callback);
// };

export const getAllOrders = (callback) => {
    const url = backurl + "/getAllOrders";
    postRequest(url, null, callback);
}

