/* Inteface Order.ts */

export interface Order {
    products: Products[];
    pickup_point: string;
    price: number;
    status: string;
    date: string;
    user_id: string;
    restaurant_id: string;
}

export interface Products {
    product_id: number;
    name: string;
}