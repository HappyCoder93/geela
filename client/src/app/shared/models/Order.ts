/* Inteface Order.ts */

export interface Order {
    products: Products[];
    price: number;
    status: string;
    user_id: string;
    restaurant_id: number;
}

export interface Products {
    product_id: number;
    name: string;
}