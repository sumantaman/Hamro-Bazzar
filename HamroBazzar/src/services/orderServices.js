import apiClient from "../utils/api-client";

export function checkoutAPI(){
    apiClient.post("/order/checkout")
}

export function getOrderAPI(){
    apiClient.get("/order/")
}