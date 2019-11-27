/* Inteface Order.ts */

export interface Order {
    products: Products[];
    price: number;
    restaurant_id: number;
}

export interface Products {
    product_id: number;
    name: string;
}